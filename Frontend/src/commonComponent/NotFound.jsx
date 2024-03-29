import React from 'react'

const NotFound = () => {
  return (
    <section className="vh-100">
        <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" className="img-fluid" alt="missing" />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 text-center">
                    <h1>Page Not Found :(</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NotFound