import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from '@mui/material'

export default function QuestionDetailPage() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold'}} gutterBottom>
              Question #12345
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" gutterBottom>
                James
              </Typography>
              <div>
                <Chip label="High Priority" size="small" sx={{ backgroundColor: '#f9f1f1', color: '#8a3838', fontSize: '10px', fontWeight: 'bold', marginRight: '10px' }} />
                <Typography variant="overline" color="text.primary" gutterBottom>
                  10 days ago
                </Typography>
              </div>
            </div>
            <Stack direction="row" spacing={1}>
              <Chip label="aaaaa" size="small" sx={{ fontSize: '10px' }} />
              <Chip label="aaaaa" size="small" sx={{ fontSize: '10px' }} />
            </Stack>
            <Typography variant="body1" sx={{ margin: '20px 0px' }}>
              Hi Doc, I'm getting stomach aches right after drinking coffee. They're painful and unpleasant...
            </Typography>
            <div>
              IMAGES
            </div>
            <Typography variant="caption">
              This is the end of the question.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              How would you categorize the question?
            </Typography>
            <Typography variant="body2" sx={{ color: '#737373', marginBottom: '20px' }}>
              We're gathering this information for internal statistcial analysis. It won't be shared with users.
            </Typography>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" gutterBottom>
                Write down your answer
              </Typography>
              <Typography variant="caption" gutterBottom style={{ marginTop: '8px' }}>
                Best Practices
              </Typography>
            </div>
            <div>
              <TextField
                id="standard-multiline-static"
                label="Text Answer"
                multiline
                rows={5}
                defaultValue="Be clear, to the point, and respectful"
                variant="standard"
                sx={{ width: '100%' }}
              />
            </div>
            <Button variant="contained" sx={{ width: '100%', margin: '10px 0px' }}>Send</Button>
            <Typography variant="caption">
              By sending the answer, you agree to our Terms of Service.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}