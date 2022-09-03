import Question from './Question'

export default function PendingQuestions({ questions = [] }) {
  return (
    <div>
      <p>We'd like to make sure users/patients get their questions answered as soon as possible. You'll always see five questions that need the most attention from the question pool.</p>
      {questions && questions.map((question) => {
        return <Question question={question} answered={false} />
      })}
    </div>
  )
}