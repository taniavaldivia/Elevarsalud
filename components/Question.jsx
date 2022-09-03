import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
} from '@mui/material'

export default function Question(props) {
  const { name, id, tags, question, images } = props.question;
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ marginRight: '10px'}}>
              { name }
            </Typography>
            <Typography variant="overline" color="text.primary" gutterBottom>
              #{ id }
            </Typography>
          </div>
          <div>
            { props.answered ? <Chip label="Respondida" size="small" sx={{ backgroundColor: '#5e9a7a', color: 'white', fontSize: '10px', fontWeight: 'bold', marginRight: '10px' }} /> : '' }
            <Typography variant="overline" color="text.primary" gutterBottom>
              10 days ago
            </Typography>
          </div>
        </div>
        <Stack direction="row" spacing={1}>
          { tags && tags.map((label) => {
            return <Chip label={label} size="small" sx={{ fontSize: '10px' }} />
          })}
        </Stack>
        <Typography variant="body2" sx={{ margin: '20px 0px'}}>
          { question }
        </Typography>
        <div>
          {images && images.map((img) => {
            return <img src={img} style={{ maxWidth: '100px', marginRight: '10px' }} />
          })}
        </div>
        <div style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
        }}>
          <a href="/question_details">
            <Button variant="contained" sx={{ backgroundColor: '#7153a1', flexDirection: 'row-reverse' }}>Answer</Button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}