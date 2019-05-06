import { connect } from 'react-redux'

function Main(props) {
  return (
    <div>
      { props.body }
    </div>
  )
}

export default connect(state => state)(Main)
