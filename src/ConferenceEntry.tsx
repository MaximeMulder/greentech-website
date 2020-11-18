import React from 'react';
import ReactDOM from 'react-dom';

interface ConferenceEntryProps {
    room: string;
    date: string; // TODO: date type

    name: string;
    description: string;
    authors: string[];
}

class ConferenceEntry extends React.Component<ConferenceEntryProps> {
    room: string;
    date: string;

    name: string;
    description: string;
    authors: string[];

    constructor(props: ConferenceEntryProps) {
        super(props);
    
        this.room = props.room;
        this.date = props.date;
        this.name = props.name;
        this.description = props.description;
        this.authors = props.authors;
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.room}
                    {this.date}
                </div>
                <div>
                    <h3>{this.name}</h3>
                    {this.description}<br />
                    {this.authors.map((element, i) => {
                        if(i == 0)
                            return element
                        else
                            return ' - ' + element
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default ConferenceEntry;
