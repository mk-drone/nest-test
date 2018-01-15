NestList = React.createClass({

    getInitialState() {
        return {
            // nest: null,
            showPreview: false        
        };
    },

    render: function(){
        const showPreview = {
            display: this.state.showPreview ? 'block' : 'none'
        };

        const groupedStyle = {
            background: this.props.nest[0].group_id ? 'rgb(24, 190, 9)' : 'rgb(192, 89, 89)'
        };

        let jobs = this.props.nest.map((val,key)=>{
            return (<Nest nest={val} key={val.nest_job}/>)
        });
        return (
            <div className="nestJobs">
                <p className="nestId" style={groupedStyle}>
                Group ID: {this.props.nest[0].group_id}<br />
                Nest ID: {this.props.nest[0].nest_id}<br />
                    <span className="nestArea">Area: {this.props.nest[0].nest_area} m²</span>
                    <img src="https://image.flaticon.com/icons/png/128/142/142336.png" 
                        className="previewIco" 
                        onMouseEnter={this.displayPreview} 
                        onMouseLeave={this.hidePreview}
                        alt="show prewiev" />
                    <img style={showPreview} 
                        className="nestPreview" 
                        src={this.props.nest[0].preview} 
                        alt="nest preview" />
                </p>
                <span>
                    Nest Content:
                </span>
                <ul>
                    {jobs}
                </ul>
                <button className="release" onClick={this.releaseNest}>Release nest</button>
            </div>
        );
    },
    
    displayPreview: function(e){
        this.setState({
            showPreview: true//enable preview onmouseover
        })
    },

    hidePreview: function(e){
        this.setState({
            showPreview: false
        })
    },

    releaseNest: function(e){
        // let groupId = prompt("Enter new group id");
        alert(this.getGroupID());
        
    },

    getGroupID: function(){
        return Math.floor(Math.random()*100000);
    },
})