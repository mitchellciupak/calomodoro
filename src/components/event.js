import { useState } from "react";
import { Box, Card, TextInput, Button } from '@mantine/core';

const minutes = 30;



export default function EventComponent(props) {
    const [summary, setSummary] = useState("write your event summary here.");

    const startButtonHandler = () => {

        const event = {
            'summary': summary,
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

        alert('A Event was submitted to Google Calendar: ' + summary);
    }

    return (
        <>
            <Box sx={{ width: 1000 }} mx="auto">
                <Card>
                    <TextInput
                        value={summary}
                        onChange={event => setSummary(event.target.value)}
                        placeholder="write your event summary here."
                        label="Event Summary"
                        radius="sm"
                    />
                    <Button onClick={startButtonHandler}>Start</Button>
                </Card>
            </Box>
        </>
    );
}
