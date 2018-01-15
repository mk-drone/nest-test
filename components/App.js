const GROUPS_API = 'api-url';

App = React.createClass({
    getInitialState() {
        return {
            nests: [],
            interval: null,
            grouped: false,
            notGrouped: true,
        };
    },

    componentDidMount: function(){
        this.setState({
            // interval: null
            interval: setInterval(this.getGroup, 2000)
        })
        this.getGroup();
    },

    componentWillUnmount: function(){
        clearInterval(this.state.interval);
    },

    shouldComponentUpdate(nextProps, oldProps){
        console.log('update')
        return true;
    },

    render: function(){
        let groups = [];
        
        for(let prop in this.state.nests){
            groups.push(<NestList key={prop} nest={this.state.nests[prop]} />);
        }
        groups.reverse(); //show newest at the top
        return (
                <div>
                    <div className="filters">
                    <label> Show not grouped nests</label>
                    <input type="checkbox" name="not-grouped" onClick={this.toggleNotGrouped} checked={this.state.notGrouped}/>
                    <br/>
                    <label> Show grouped nests</label>
                    <input type="checkbox" name="grouped" onClick={this.toggleGrouped}  checked={this.state.grouped}/>
                    </div>
                    {groups}
                    
                </div>
        );

    },

    toggleGrouped: function(e){
        // console.log(e.target.checked);
        this.setState({
            grouped: e.target.checked
        })
    },
    toggleNotGrouped: function(e){
        this.setState({
            notGrouped: e.target.checked
        })
    },


    getGroup: function(callback){
        let url = `${GROUPS_API}?grouped=${this.state.grouped}&ngrouped=${this.state.notGrouped}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        // console.log('ng',this.state.notGrouped,'gr',this.state.grouped)
        xhr.onload = () => {
            if (xhr.status === 200) {
                if (xhr.responseText.length > 0){
                    this.setState({
                        nests: JSON.parse(xhr.responseText)
                    });
                }
            }
        };
        xhr.send();
    },
})
