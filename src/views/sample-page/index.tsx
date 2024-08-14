import MainCard from 'ui-component/cards/MainCard';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// ==============================|| SAMPLE PAGE ||============================== //

interface Position {
    x: number;
    y: number;
}

interface PosState {
    item1: Position;
    item2: Position;
    item3: Position;
    item4: Position;
    item5: Position;
}

const SamplePage = () => {
    const [posi, setPosi] = useState<PosState>({
        item1: { x: 0, y: -180 },
        item2: { x: 180, y: 0 },
        item3: { x: 0, y: 0 },
        item4: { x: 0, y: 180 },
        item5: { x: -180, y: 0 }
    });

    const handleDragStop = (itemKey: keyof PosState, e: DraggableEvent, data: DraggableData) => {
        const newPos = { x: data.x, y: data.y };

        for (let key in posi) {
            if (key !== itemKey) {
                const item = posi[key as keyof PosState];
                const distX = Math.abs(item.x - newPos.x);
                const distY = Math.abs(item.y - newPos.y);

                if (distX < 65 && distY < 65) {
                    setPosi((prevState) => ({
                        ...prevState,
                        [itemKey]: { ...item },
                        [key]: { ...posi[itemKey] }
                    }));
                    return;
                }
            }
        }
        setPosi((prevState) => ({
            ...prevState,
            [itemKey]: newPos
        }));
    };

    return (
        <MainCard title="Tree">
            <Container
                maxWidth={false}
                sx={{ height: '60vh', bgcolor: 'lightcyan', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Draggable position={posi.item1} onStop={(e, data) => handleDragStop('item1', e, data)}>
                    <Grid
                        container
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>1</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Draggable position={posi.item2} onStop={(e, data) => handleDragStop('item2', e, data)}>
                    <Grid
                        container
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>2</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Draggable position={posi.item3} onStop={(e, data) => handleDragStop('item3', e, data)}>
                    <Grid
                        container
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>3</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Draggable position={posi.item4} onStop={(e, data) => handleDragStop('item4', e, data)}>
                    <Grid
                        container
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>4</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Draggable position={posi.item5} onStop={(e, data) => handleDragStop('item5', e, data)}>
                    <Grid
                        container
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>5</span>
                        </Grid>
                    </Grid>
                </Draggable>
            </Container>
        </MainCard>
    );
};

export default SamplePage;
