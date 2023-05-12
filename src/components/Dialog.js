function Dialog({funct = f => f, isShowing}) {
  return (
    <div className='dialog'>
      <input
        type='button'
        value={isShowing ? 'Hide' : 'Show'}
        onClick={funct}
      />
    </div>
  )
}

export default Dialog
