const Home = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="d-none d-md-flex col-md-4 col-lg-3">
                    <img src="https://picsum.photos/600/600" alt="Tobias" className="img-fluid rounded-circle" />
                </div>
                <div className="col-md-8 col-lg-9">
                    <div className="d-flex justify-content-between mb-3">
                        <h2>Welcome Home!</h2>
                        <button className="btn btn-outline-primary">Hej</button>
                    </div>
                    <p>Duis venenatis est eu metus sagittis, vel scelerisque risus condimentum. Cras et leo scelerisque, vulputate eros at, auctor velit. Quisque posuere convallis lorem, a ullamcorper nisi. Sed rutrum semper neque, ac ornare nisl pharetra nec. Etiam tortor ante, ultricies at sagittis sed, bibendum a augue. Vivamus scelerisque mi nulla, nec interdum turpis dapibus a. Donec a orci in eros laoreet tristique at eget eros. Integer interdum ante et velit ultrices pretium. Nulla tincidunt volutpat nisi, eu lobortis est. Quisque euismod velit vel nulla dignissim molestie. Quisque sed ante non turpis aliquet laoreet. Sed at dignissim est. Aliquam erat volutpat. Donec hendrerit dui orci, vitae ornare neque fringilla at. Maecenas malesuada dictum nisi, vitae pharetra purus malesuada ut. Duis vel nulla maximus, accumsan augue ullamcorper, mattis nisi.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;