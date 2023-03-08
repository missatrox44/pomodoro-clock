export default function Rounds(prop: { roundsCompleted:number }) {
  return (
    <div className="rounds-completed">
      <span>Rounds Completed: { prop.roundsCompleted }</span>
    </div>
  )
}