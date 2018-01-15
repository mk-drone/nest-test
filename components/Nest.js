
// class Nest extends React.Component {
Nest = React.createClass({
    componentDidUpdate: function(){
        // console.log('update: ', this.props.nest.nest_job)
    },
    render: function(){
        console.log('rendered: ', new Date(), this.props.nest.nest_job)
        return (
            <li className="nest">
                { this.props.nest.nest_job}                
            </li>
        );
    }
});