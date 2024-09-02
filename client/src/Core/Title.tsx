import Typography from '@mui/material/Typography';

export default function JuliusTitle(text: string, variant: string='h2') {
  return (
    <Typography variant={ variant } gutterBottom sx={{ fontFamily: 'Julius Sans One' }}>
      { text }
    </Typography>
  )
}
