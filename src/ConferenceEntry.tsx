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
    constructor(props: ConferenceEntryProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.room}
                    {this.props.date}
                </div>
                <div>
                    <h3>{this.props.name}</h3>
                    {this.props.description}<br />
                    {this.props.authors.join(' - ')}
                </div>
            </React.Fragment>
        )
    }
}

export default ConferenceEntry;
