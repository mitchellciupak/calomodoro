import React from "react";

const event = {
    'summary': 'Riding a Bike',
    'location': '402 At My Desk Blvd, Moon, Dark Side',
    'description': 'I plan to ride my bike',
    'start': {
        'dateTime': '2015-05-28T09:00:00-07:00',
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    'end': {
        'dateTime': '2015-05-28T17:00:00-07:00',
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
        { 'email': 'lpage@example.com' },
        { 'email': 'sbrin@example.com' },
    ],
    'reminders': {
        'useDefault': false,
        'overrides': [
            { 'method': 'email', 'minutes': 24 * 60 },
            { 'method': 'popup', 'minutes': 10 },
        ],
    },
};

export default class EventComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = event;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A Event was submitted to Google Calendar: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Task Summary:
                    <input type="text" value={this.state.summary} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
