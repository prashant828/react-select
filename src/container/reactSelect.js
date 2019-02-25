import React, { Component } from 'react';
import InputDiv from '../component/inputDiv';
import Suggestion from '../component/suggestion';
import s from './select.css'

class reactSelect extends Component {

    constructor(props) {
        super(props);
        this.inputFocus = React.createRef();
        this.state = {
            options: [],
            permanentOptions: [],
            values: [],
            inputValue: '',
            showList: false
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkSelected = this.checkSelected.bind(this);
    };

    componentDidMount() {
        this.setState({
            options: ['red', 'white', 'green', 'yellow', 'book', 'bottle', 'mug', 'black', 'blue'],
            permanentOptions: ['red', 'white', 'green', 'yellow', 'book', 'bottle', 'mug', 'black', 'blue']
        })
    }

    checkSelected(values) {
        let arr = [];
        if (values.length < 1) {
            console.log(this.state.permanentOptions)
        } else {
            for (let i = 0; i < this.state.permanentOptions.length; i++) {
                for (let j = 0; j < values.length; j++) {
                    if (this.state.permanentOptions[i] !== values[j]) {
                        arr.push(this.state.permanentOptions[i])
                    }
                }
            }
        }
        console.log('check', arr)
        // return arr
    }

    handleSelect(option) {
        let val = [...this.state.values];
        let optns = [...this.state.options];
        let optnIndex = optns.findIndex(optn => option === optn);
        optns.splice(optnIndex, 1);
        val.push(option);
        this.setState({
            values: val,
            options: optns,
        }, () => console.log('select', this.state.values));
        this.inputFocus.current.focus();
    }

    handleDelete(selection) {
        let val = [...this.state.values];
        let optns = [...this.state.options];
        optns.push(selection);
        let valIndex = val.findIndex(val => selection === val);
        val.splice(valIndex, 1);
        this.checkSelected(val)
        this.setState({
            values: val,
            options: optns
        })
    }

    handleFocus() {
        this.inputFocus.current.focus();
        this.setState({
            showList: true
        })
    }

    handleInputChange(e) {
        let found = this.state.permanentOptions.map(optn => optn.match(e.target.value));
        let updateOptions = [];
        for (let i = 0; i < found.length; i++) {
            if (found[i]) {
                updateOptions.push(found[i].input)
            }
        }
        this.setState({
            inputValue: e.target.value,
            options: updateOptions
        })
    }

    render() {
        let suggestion = null;
        if (this.state.showList) {
            suggestion = <Suggestion options={this.state.options} handleSelect={this.handleSelect} />
        }
        return (
            <div className={s.select}>
                <InputDiv
                    values={this.state.values}
                    handleDelete={this.handleDelete}
                    inputFocus={this.inputFocus}
                    click={this.handleFocus}
                    change={this.handleInputChange}
                    inputValue={this.state.inputValue} />
                {suggestion}
            </div>


        )
    }
}

export default reactSelect;