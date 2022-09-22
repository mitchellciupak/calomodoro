import { useState } from "react";
import { Box, Card, TextInput, Button } from '@mantine/core';

const minutes = 30;

const event = {
    'summary': 'Riding a Bike',
    'location': '402 At My Desk Blvd, Moon, Dark Side',
    'description': 'I plan to ride my bike',
    'start': {
        'dateTime': new Date().toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    'end': {
        'dateTime': (new Date(new Date().getTime() + (minutes * 60 * 1000))).toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    // 'recurrence': [
    //     'RRULE:FREQ=DAILY;COUNT=2'
    // ],
    // 'attendees': [
    //     { 'email': 'lpage@example.com' },
    //     { 'email': 'sbrin@example.com' },
    // ],
    // 'reminders': {
    //     'useDefault': false,
    //     'overrides': [
    //         { 'method': 'email', 'minutes': 24 * 60 },
    //         { 'method': 'popup', 'minutes': 10 },
    //     ],
    // },
};

export default function EventComponent(props) {
    const [eventSummary, setEventSummaryValue] = useState(event.summary);

    const submitButtonHandler = () => {
        alert('A Event was submitted to Google Calendar: ' + eventSummary);
    }

    return (
        <>
            <Box sx={{ width: 1000 }} mx="auto">
                <Card>
                    <TextInput
                        value={eventSummary}
                        onChange={(eventSummary) => setEventSummaryValue(eventSummary)}
                        placeholder="write your event summary here."
                        label="Event Summary"
                        radius="sm"
                        withAsterisk
                    />
                    <Button onClick={submitButtonHandler}>Submit</Button>
                </Card>
            </Box>
        </>
    );
}
