function SubscriptionForm() {
  // JSX
  const myLabel = () => 'Input your name:';
  return (
    <>
      <div>
        <label htmlFor="username" style={{ marginRight: '100px' }}>
          {myLabel()}
        </label>
        <input type="text" id="username" className="form-control" />
      </div>
      <div>This is the second div</div>
    </>
  );
}

export default SubscriptionForm;
