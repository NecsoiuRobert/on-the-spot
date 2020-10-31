import React, { Component } from 'react';


class addJob extends Component {

    state = {
        name : null,
        description : null,
        experience : null,
        ability: '',
        abilitatiSeparate : []
    }

    handleChange = (e) =>
    {
        this.setState ({
            [e.target.id] : e.target.value
        })
      //  console.log(this.state);

    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
     
        const abilitatiSeparate = this.state.ability.split(',');
        console.log(abilitatiSeparate);
      
        this.setState({
         ...this.state,
         abilitatiSeparate : [...abilitatiSeparate]
        });

        console.log(this.state);

       
    }

    
    render(){

        return (
            <div className="container mt-4" >
                 <header className = "text-center text-light my-4"> 
                        <h1 className="header1 mb-4">ADD JOB </h1>
                         </header>

                <form onSubmit = {this.handleSubmit} >
                    <div className = "form-group row text-light my-4">
                        <label htmlFor="position" > Position:  </label>
                        <input type="text" id="name" onChange={this.handleChange} className= "form-control"   placeholder="Java Developer"/>
                    </div>
               
                
                    <div className = "form-group row">
                        <label htmlFor="description"> Description:</label>
                        <input type="text" id="description" onChange={this.handleChange} className= "form-control"  placeholder="Job Description"/>
                    </div>

                    <div className = "form-group row">
                        <label htmlFor="experience" > Experience needed:</label>
                        <input type="text" id="experience" onChange={this.handleChange} className= "form-control" placeholder="Entry Level"/>
                    </div>
                   
                    <div className = "form-group row">
                        <label htmlFor="abilities" > Add an ability required:</label>
                        <input type="text" id = "ability" onChange={this.handleChange} className= "form-control"  placeholder="Ability1, ability2, ability3"/> 
                    </div>
                    
                    <button class="btn btn-primary button1"> Done </button>
                </form>
               
            </div>

            

        )    
    }
}

export default addJob;
