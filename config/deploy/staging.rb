set :stage,     :staging
set :branch,    :master
set :node_env,  :staging
set :node_port,  8080

server "34.74.139.99", port: "22", user: "deployer", roles: [:app], primary: true

# Change these
set :repo_url,        "git@bitbucket.org:tanngoc93/beta.thedogpaws.com.git"
set :user,            "deployer"
set :application,     "beta.thedogpaws.com"
set :deploy_to,       "/var/www/#{fetch(:application)}"

# Don"t change these unless you know what you"re doing
set :pty,             false
set :use_sudo,        false
set :deploy_via,      :remote_cache

# for NVM
set :nvm_type,        :user
set :nvm_node,        "v8.15.0"
set :nvm_custom_path, "/home/#{fetch(:user)}/.nvm/versions/node"
set :default_env,     "PATH" => "/home/#{fetch(:user)}/.nvm/versions/node/v8.15.0/bin:$PATH"
set :nvm_path,        "/home/#{fetch(:user)}/.nvm"
set :nvm_map_bins,    %w[yarn node next]

# share node_modules folder
set :linked_dirs,     %w[node_modules tmp/log tmp/pids]

# passenger tasks
namespace :passenger do
  task :start do
    on roles(:app) do
      within current_path do
        execute :yarn, "run build"
      end

      within current_path do
        execute :passenger, "start --app-type node --environment #{fetch(:node_env)} --log-file #{current_path}/tmp/log/passenger.#{fetch(:node_port)}.log --pid-file #{current_path}/tmp/pids/passenger.#{fetch(:node_port)}.pid --startup-file #{current_path}/server.js --port #{fetch(:node_port)} --daemonize --envvar NODE_TLS_REJECT_UNAUTHORIZED=0"
      end
    end
  end

  task :restart do
    on roles(:app) do
      within current_path do
        execute :yarn, "run build"
      end

      within current_path do
        invoke "passenger:stop"
      end

      within current_path do
        invoke "passenger:start"
      end
    end
  end

  task :stop do
    on roles(:app) do
      within current_path do
        if test("[ -f #{current_path}/tmp/pids/passenger.#{fetch(:node_port)}.pid ]")
          execute :passenger, "stop --pid-file #{current_path}/tmp/pids/passenger.#{fetch(:node_port)}.pid"
        end
      end
    end
  end
end

#
namespace :deploy do
  after "deploy:publishing", "deploy:yarn_install"
  after "deploy:publishing", "deploy:prepare"
  after "deploy:publishing", "deploy:restart"

  task :yarn_install do
    on roles(:app) do
      within current_path do
        execute :yarn, "install"
      end
    end
  end

  task :prepare do
    on roles(:app) do
      within shared_path  do
        execute :mkdir, "-p", "tmp/log", "tmp/pids"
      end
    end
  end

  task :restart do
    invoke "passenger:restart"
  end

  task :start do
    invoke "passenger:start"
  end

  task :stop do
    invoke "passenger:stop"
  end
end