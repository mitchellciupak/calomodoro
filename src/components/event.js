import { useState, React } from "react";
import { Box, Card, TextInput, Button } from "@mantine/core";

export default function EventComponent(props) {
    const { minutes } = props;

    const [summary, setSummary] = useState("write your event summary here.");
    const [description, setDescription] = useState("write your event description here.");

    const startButtonHandler = () => {

        const event = {
            "summary": summary,
            "location": "402 At My Desk Blvd, Moon, Dark Side",
            "description": description,
            "start": {
                "dateTime": new Date().toISOString(),
                "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            "end": {
                "dateTime": (new Date(new Date().getTime() + (minutes * 60 * 1000))).toISOString(),
                "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            "recurrence": [
                "RRULE:FREQ=DAILY;COUNT=2"
            ],
            "attendees": [
                { "email": "lpage@example.com" },
                { "email": "sbrin@example.com" },
            ],
            "reminders": {
                "useDefault": false,
                "overrides": [
                    { "method": "email", "minutes": 24 * 60 },
                    { "method": "popup", "minutes": 10 },
                ],
            },
        };

        alert("A Event was submitted to Google Calendar: " + event.summary);
    }

    return (
        <>
            <Box sx={{ width: 1000 }} mx="auto">
                <Card>
                    <TextInput
                        value={summary}
                        onChange={event => setSummary(event.target.value)}
                        label="Event Summary"
                        radius="sm"
                    />
                    <TextInput
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        label="Event Description"
                        radius="sm"
                    />
                    <div></div>
                    <Button onClick={startButtonHandler}>Start</Button>
                </Card>
            </Box>
        </>
    );
}
