import React, {useState} from 'react';
import { Button, TextField, Switch , FormControlLabel , Slider , Chip , Stack , Typography} from '@mui/material';
import './FormularioCadastro.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function FormularioCadastro({aoEnviar}) {
    const [g_esf_esq, setGrauEsfEsq] = useState(0);
    const [g_esf_dir, setGrauEsfDir] = useState(0);
    const [g_cil_esq, setGrauCilEsq] = useState(0);
    const [g_cil_dir, setGrauCilDir] = useState(0);

    const [lenteEsquerda, setLenteEsquerda] = useState('');
    const [lenteDireita, setLenteDireita] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            if (g_cil_esq == 0 && g_esf_esq <= -3 && g_esf_esq >= -12) {
                setLenteEsquerda("Prime");
            }
            else if (g_cil_esq >= -2 && g_esf_esq <= -3 && g_esf_esq >= -10) {
                setLenteEsquerda("Prime");
            }
            else if (g_cil_esq >= -5 && g_esf_esq >= -15) {
                setLenteEsquerda("Vision");
            }
            else {
                setLenteEsquerda("Não há lente disponível para esses parâmetros.");
            }

            if (g_cil_dir == 0 && g_esf_dir <= -3 && g_esf_dir >= -12) {
                setLenteDireita("Prime");
            }
            else if (g_cil_dir >= -2 && g_esf_dir <= -3 && g_esf_dir >= -10) {
                setLenteDireita("Prime");
            }
            else if (g_cil_dir >= -5 && g_esf_dir >= -15) {
                setLenteDireita("Vision");
            }
            else {
                setLenteDireita("Não há lente disponível para esses parâmetros.");
            }

            aoEnviar({g_esf_esq, g_esf_dir, g_cil_esq, g_cil_dir});   
        }}>

            <Typography gutterBottom>
                Grau Esférico do olho Esquerdo: 
            </Typography>
            <Slider 
                value={g_esf_esq}
                onChange={event => {
                    setGrauEsfEsq(event.target.value);
                }}
                valueLabelDisplay="on"
                step={0.25} 
                marks={true}
                min={-15} 
                max={0} 
            />

            <Typography gutterBottom>
                Grau Esférico do olho Direito: 
            </Typography>
            <Slider 
                value={g_esf_dir}
                onChange={event => {
                    setGrauEsfDir(event.target.value);
                }}
                valueLabelDisplay="on"
                step={0.25} 
                marks={true}
                min={-15} 
                max={0} 
            />

            <Typography gutterBottom>
                Grau Cilíndrico do olho Esquerdo: 
            </Typography>
            <Slider
                value={g_cil_esq}
                onChange={event => {
                    setGrauCilEsq(event.target.value);
                }}
                valueLabelDisplay="on"
                step={0.25} 
                marks={true}
                min={-15} 
                max={0} 
            />

            <Typography gutterBottom>
                Grau Cilíndrico do olho Direito: 
            </Typography>
            <Slider 
                value={g_cil_dir}
                onChange={event => {
                    setGrauCilDir(event.target.value);
                }}
                valueLabelDisplay="on"
                step={0.25} 
                marks={true}
                min={-15} 
                max={0} 
            />

            
            <Stack direction="row" spacing={1}>
                <Chip label={"Grau Esférico do olho Esquerdo: " + g_esf_esq} color="primary" />
                <Chip label={"Grau Esférico do olho Direito: " + g_esf_dir} color="success" />
            </Stack>

            <Stack direction="row" spacing={1}>
                <Chip label={"Grau Cilindrico do olho Esquerdo: " + g_cil_esq} color="primary" />
                <Chip label={"Grau Cilindrico do olho Direito: " + g_cil_dir} color="success" />
            </Stack>    
            
            <div className="botao">
            <Button variant="contained" type="submit">
                Verificar lentes
            </Button>
            </div>

            <Stack direction="row" spacing={1}>
                <Chip label={"Lente Esquerda: " + lenteEsquerda} color="primary" />
                <Chip label={"Lente Direita: " + lenteDireita} color="success" />
            </Stack>
        </form>
    );

    
    
}

export default FormularioCadastro;