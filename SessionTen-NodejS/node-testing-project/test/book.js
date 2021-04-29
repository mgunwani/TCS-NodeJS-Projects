
let mongoose = require('mongoose');
let Book = require('../models/book.model')

// Require Dev Depedencies

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Books', () => {

    // beforeEach((done) => {
    //     Book.remove({}, err => {
    //         done();
    //     })
    // });

    // describe('Get Books', () => {
    //     it('it should Get All the books', (done) => {
    //         chai.request(server)
    //             .get('/books')
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.body.should.a('array');
    //                 res.body.length.should.be.eq(0);
    //                 done();
    //             });
    //     });
    // })


    // describe('POST Book', () => {
    //     it('it should not POST a book without pages field', (done) => {
    //         let book = {
    //             title: "Positive Vibes",
    //             author: "Raman Ranjan",
    //             year: 2013,
    //         };
    //         chai.request(server)
    //             .post('/books/add')
    //             .send(book)
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('object');
    //                 res.body.should.have.property('errors');
    //                 res.body.errors.should.have.property('pages');
    //                 res.body.errors.pages.should.have.property('kind').eql('required');
    //                 done();
    //             })
    //     })
    // });

    describe('/GET/:id book', () => {
        it('it should GET a book by the given id', (done) => {
            let book = new Book({
                "_id": "608ae49a46947049f09bcddb",
                "title": "Negative Thoughts",
                "author": "Roger Lee",
                "year": 2020,
                "pages": 2,
                "createdAt": "2021-04-29T16:53:46.584Z"
            });
            chai.request(server)
                .get('/books/' + book.id)
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('author');
                    res.body.should.have.property('pages');
                    res.body.should.have.property('year');
                    res.body.should.have.property('_id').eql(book.id);
                    done();
                });
        });

    });
});

