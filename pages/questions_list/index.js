import React, { useState } from 'react'
import AnsweredQuestions from '../../components/AnsweredQuestions'
import PendingQuestions from '../../components/PendingQuestions'
import {
  Box,
  Tabs,
  Tab,
} from '@mui/material'

const questions = [{
  name: "Rachel",
  id: 12345,
  tags: ["Female", 27],
  question: "Hi Doc, I'm getting stomach aches right after drinking coffee. They're painful and unpleasant (particularly so in the past month or two). They've been noticeable for a fair amount of time - months, if not longer. I'm wondering if this is normal or not, and if not what the reason behind them could be. I also wonder wheter there's something that I can do about them. Thanks so..."
}, {
  name: "Tom",
  id: 12387,
  tags: ["Male", 27],
  question: "Hi Doc, I'm getting stomach aches right after drinking coffee. They're painful and unpleasant (particularly so in the past month or two). They've been noticeable for a fair amount of time - months, if not longer. I'm wondering if this is normal or not, and if not what the reason behind them could be. I also wonder wheter there's something that I can do about them. Thanks so..."
}, {
  name: "James",
  id: 12413,
  tags: ["Male", 40],
  question: "Hi Doc, I'm getting rashes on both my forearms for no reason. This never happened before. What may have caused it and should I go see a GP? Thanks so much!",
  images: ["https://post.healthline.com/wp-content/uploads/2021/09/poison-ivy-rash-732x549-thumbnail-732x549.jpg", "https://images.theconversation.com/files/209558/original/file-20180308-30983-e4u830.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop", "https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/124/2021/06/29162408/iStock-1270933857-300x200.jpg"]
}, {
  name: "Anonymous",
  id: 12413,
  tags: ["Male", 40],
  images: ["https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/124/2021/06/29162408/iStock-1270933857-300x200.jpg"]
}, {
  name: "Hey you",
  id: 12413,
  tags: ["Male", 40],
  question: "Hi Doc, I'm getting rashes on both my forearms for no reason. This never happened before. What may have caused it and should I go see a GP? Thanks so much!",
  images: ["https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/124/2021/06/29162408/iStock-1270933857-300x200.jpg"]
}]

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function QuestionListPage() {
  const [tab, setTab] = useState(0);

  const handleChange = (e, newVal) => {
    setTab(newVal);
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'center', display: 'flex', }}>
          <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Pending Questions" {...a11yProps(0)} />
            <Tab label="Answered Questions" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <PendingQuestions questions={questions} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <AnsweredQuestions questions={questions}/>
        </TabPanel>
      </Box>
    </div>
  );
}