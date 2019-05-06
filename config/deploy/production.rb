set :stage,    :production
set :node_env, :production
set :branch,   :master

server "159.89.135.236", port: "22", user: "deployer", roles: [:app], primary: true

# Change these
set :repo_url,                "git@bitbucket.org:tanngoc93/beta.thedogpaws.com.git"
set :user,                    "deployer"
set :application,             "beta.thedogpaws.com"
set :deploy_to,               "/var/www/#{fetch(:application)}"

# Don"t change these unless you know what you"re doing
set :pty,                     false
set :use_sudo,                false
set :deploy_via,              :remote_cache

#
# set :passenger_restart_with_touch, true

# for NVM
set :nvm_type,        :user
set :nvm_node,        "v8.15.0"
set :nvm_custom_path, "/home/#{fetch(:user)}/.nvm/versions/node"
set :default_env,     "PATH" => "/home/#{fetch(:user)}/.nvm/versions/node/v8.15.0/bin:$PATH"
set :nvm_path,        "/home/#{fetch(:user)}/.nvm"
set :nvm_map_bins,    %w[node npm yarn pm2 next]

# share node_modules folder
set :linked_dirs,     %w[node_modules]

#
# pm2 tasks
namespace :pm2 do
  task :start do
    on roles(:app) do
      within current_path do
        execute :yarn, 'run build'
      end

      within shared_path do
        execute :pm2, 'start app.json'
      end
    end
  end

  task :restart do
    on roles(:app) do
      within current_path do
        execute :yarn, 'run build'
      end

      within shared_path do
        execute :pm2, 'reload app.json'
      end
    end
  end

  task :stop do
    on roles(:app) do
      within shared_path do
        execute :pm2, 'stop app.json'
      end
    end
  end
end

#
namespace :deploy do
  after "deploy:publishing", "deploy:yarn_install"
  after "deploy:publishing", "deploy:restart"

  task :yarn_install do
    on roles(:app) do
      within current_path do
        execute :yarn, "install"
      end
    end
  end

  task :restart do
    invoke "pm2:restart"
  end

  task :start do
    invoke "pm2:start"
  end

  task :stop do
    invoke "pm2:stop"
  end
end