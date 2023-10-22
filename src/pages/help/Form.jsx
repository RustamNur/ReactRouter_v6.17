

const Form = () => {
  return (
      <>
          <h1>Send us Questions...</h1>
          <hr />
          <div className="form-container">
              <form>
                  <label className="form-control">
                      <span>Your e-mail:</span>
                      <input type="text" />
                  </label>
                  <label className="form-control">
                      <span>Your text:</span>
                      <textarea  cols="30" rows="10"></textarea>
                  </label>
                  <button className="button">Send</button>
              </form>
          </div>
    </>
  )
}

export default Form
