import { Input, Spacer, Table, Dropdown, Link, Text, Grid, Button, Container } from "@nextui-org/react";
import React from "react";

export default function Form() {
    const [keyword, setKeyword] = React.useState("");
    const [dat, setDat] = React.useState("");
    const [text, setText] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [num, setNum] = React.useState(0);
    const [url, setUrl] = React.useState("");
    const handleKeyword = event => {
        setKeyword(event.target.value);
    }
    const handleDat = event => {
        setDat(event.target.value);
    }
    const handleText = event => {
        setText(event.target.value);
    }
    const handlePw = event => {
        setPw(event.target.value);
    }
    const handleNum = event => {
        setNum(event.target.value);
    }
    const handleUrl = event => {
        setUrl(event.target.value);
    }
    const submitForm = event => {
        console.log("submitted");
    }
    console.log(text, pw, num, url);
    return (
        <>
            <Spacer>y=4</Spacer>
            <Input
                label="Search"
                type="search"
                onChange={handleKeyword}
            />
            <Input
                label="Date"
                type="date"
                onChange={handleDat}
            />
            <Text>{keyword}</Text>
            <Text>{dat}</Text>
            <Grid.Container gap={4}>
                <Grid>
                    <Input
                        label="Text"
                        type="text"
                        onChange={handleText}
                    />
                </Grid>
                <Grid>
                    <Input
                        label="Password"
                        type="password"
                        onChange={handlePw}
                    />
                </Grid>
                <Grid>
                    <Input
                        label="Number"
                        type="number"
                        onChange={handleNum}
                    />
                </Grid>
                <Grid>
                    <Input
                        label="Url"
                        type="url"
                        onChange={handleUrl}
                    />
                </Grid>
                <Grid>
                    <Input
                        label="jpg"
                        type="image"
                    />
                </Grid>
                <Grid>
                    <Button onPress={submitForm}>submit</Button>
                </Grid>
            </Grid.Container>
            <Container output><Text>{text}</Text>
                <Text>{pw}</Text>
                <Text>{num}</Text>
                <Text>{url}</Text></Container>
        </>
    );
}