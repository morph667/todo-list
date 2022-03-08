import React, {Component} from 'react';

class TodoList extends Component {

    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault(); // empeche le reload de la page
        this.setState({
            items: [...this.state.items, this.state.userInput], //permet la mutation du tableau sans devoir creer un nv tab, copier l'ancien + le nouvel element 
            userInput: ''
        });
    }

    deleteTodo(itemCourant) {
        const array = this.state.items;
        const index = array.indexOf(itemCourant); //recupere l'element de la todolist a supprimer
        console.log(index)
        array.splice(index, 1); // supprime l'element
        this.setState({
            item: array
        });
    }

    renderTodo(){
        return this.state.items.map((item)=>{
            return(
                <div key={item} >
                    {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>    
                </div>
            );
        });
    }

    render() {
        return(
            <div>
                <h1>Ma Todo List</h1>
                <form>
                    <div className='flex items-stretch'>
                        <input 
                            className='mt-1 mx-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-1/2 rounded-md sm:text-sm focus:ring-1'
                            value={this.state.userInput} 
                            type={"text"} 
                            placeholder={"renseigner un item"} 
                            onChange={this.onChange.bind(this)}
                        />
                        <button
                            className='px-3 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md' 
                            onClick={this.addTodo.bind(this)}
                        >Ajouter</button>
                    </div>
                </form>
                <div className='flex flex-col bg-slate-300 w-1/3 rounded-md'>
                    {this.renderTodo()}
                </div>
            </div>
        );
    }
}

export default TodoList;