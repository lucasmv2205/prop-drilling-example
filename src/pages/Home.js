import React, { useState } from 'react';
import { Counter } from '../components/Counter';
import { Box, Container } from '@mui/system';
import { Result } from '../components/Result';

export default function Home() {
    const [gryffindorScore, setGryffindorScore] = useState(0);
    const [slytherinScore, setSlytherinScore] = useState(0);

    return (
        <Container sx={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{m:5}}>
                <h1>Quidditch Tournement</h1>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Counter
                    gryffindorScore={gryffindorScore}
                    setGryffindorScore={setGryffindorScore}
                    slytherinScore={slytherinScore}
                    setSlytherinScore={setSlytherinScore}
                />
            </Box>
            <Result result={gryffindorScore+slytherinScore} />
        </Container>
    )
}