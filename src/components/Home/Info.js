import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className='py-5'>
            <div className="container">
                <Title title='our story' />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, natus magnam quaerat, non nisi soluta illo rerum accusamus, quos quae modi velit culpa commodi dolorum cumque tempore perspiciatis assumenda placeat. Itaque pariatur asperiores ut, unde autem, consequatur aperiam id deserunt neque consectetur ducimus quidem eaque tenetur, tempora at eveniet illum.
                        </p>
                        <Link to='/about/'>
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
