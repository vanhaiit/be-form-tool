// /* eslint-disable no-undef */
// /* eslint-disable arrow-body-style */
// /* eslint-disable no-unused-expressions */

// import request from 'supertest';
// import httpStatus from 'http-status';
// import { expect } from 'chai';
// import { values, omit } from 'lodash';
// import app from '../../../index';
// import Product from '../../../common/models/product.model';

// /**
//  * root level hooks
//  */

// // async function format(productId) {
// //     /**  get product from database */
// //     const dbProduct = (await Product.findById(productId)).transform();

// //     /** remove null and undefined properties */
// //     return omitBy(dbProduct, isNil);
// // }

// const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMDAiLCJ1c2VybmFtZSI6InRoYW5ocHQiLCJwaG9uZSI6Iis4NDc4MjQ3NDQyNyIsImVtYWlsIjoidGhhbmgucHRAY3NlbGwuY29tLnZuIiwibmFtZSI6IlRow6BuaCBQaOG6oW0iLCJhdmF0YXIiOm51bGwsImdyb3VwIjoidXNlciIsImV4cCI6MTU3MTc5ODg1NCwiaWF0IjoxNTcxNzEyNDU0LCJhdWQiOiJ3ZWIiLCJpc3MiOiJhdXRoLmNzZWxsLnZuL3VzZXIvd2ViIn0.fLsAeXS80VBVAKvCSvsKrUv7ixgH5KIyk0jzECWCkVQ1aOvorXpE2N_MjtcENqVLWEtXG6dK9y1aiu6vCk_oXrlv5Vtc0SD6CcTRyICrSO0uiK5jPVOBnU7uNwatHfxi9eBizcSyTjMXXGDOTYhAZcyEHdCaVXV-r1dyfAWccQspf1dPyMqXIK2hKW9_yFdFAQhxuopDuYcXKVMALp46wXJ7vveQLSmYYcK__TztBhkSDCN9Thsqyr4BIJg15jEbqTEqwmvjh1wOx9fUv0hqTE1rsfjhgtAosXhbItIexOhusCOM9l9M_comt7HFBliyhstHtinjQyd4l8mUvDuEMg';
// const dataInsert = {
//     name: 'BĐS 003',
//     content: 'BĐS 003',
//     attributes: {
//         price: 1234
//     },
//     images: [
//         '/products/abc.png',
//         '/products/bcd.png',
//         '/products/def.png'
//     ],
//     province: {
//         code: '001',
//         name: 'HCM'
//     },
//     district: {
//         code: '011',
//         name: 'Q1'
//     },
//     ward: {
//         code: '111',
//         name: 'Tan Binh'
//     },
//     address: '63D3 Khu biệt thự vườn đào',
//     country: 'VN',
//     location: {
//         latitude: 0.9,
//         longitude: 9.3
//     },
//     categories: [
//         {
//             id: 'car',
//             name: 'Ô tô',
//             group: 1
//         },
//         {
//             id: 'car_mes',
//             name: 'Ô tô mes',
//             group: 2
//         },
//         {
//             id: 'car_mes_c',
//             name: 'Ô tô mes C',
//             group: 3
//         }
//     ],
//     project: {
//         id: 'project3',
//         name: 'Anh Dũng II - Sao Đỏ I'
//     },
//     owner: {
//         id: '10000',
//         name: 'NVT',
//         phone: '098888828'
//     },
//     price: 1000000,
//     publicPrice: 2000000,
//     originPrice: 3000000,
//     currency: 'VND',
//     note: 'Chỉ share cho cubin 2',
//     privacy: 'friend',
//     friends: [
//         {
//             id: '222',
//             name: 'aaa'
//         },
//         {
//             id: '333',
//             name: 'bbb'
//         }
//     ],
//     isActive: true,
//     createdBy: {
//         id: '1000',
//         name: 'Thanh Nguyen'
//     }
// };

// describe('Products API', async () => {
//     let dbProducts;

//     beforeEach(async () => {
//         dbProducts = {
//             activeProduct: {
//                 _id: '1',
//                 name: 'BĐS 001',
//                 description: 'BĐS 001',
//                 attributes: {
//                     price: 1234
//                 },
//                 images: [],
//                 province: {
//                     code: '002',
//                     name: 'HCM'
//                 },
//                 district: {
//                     code: '022',
//                     name: 'Q1'
//                 },
//                 ward: {
//                     code: '222',
//                     name: 'Tan Binh'
//                 },
//                 address: '63D3 Khu biệt thự vườn đào',
//                 location: {
//                     latitude: 0.9,
//                     longitude: 9.3
//                 },
//                 categories: [
//                     {
//                         id: 'land',
//                         name: 'Bất Động Sản',
//                         group: 1
//                     },
//                     {
//                         id: 'land_house',
//                         name: 'Nhà Đất',
//                         group: 2
//                     },
//                     {
//                         id: 'land_house_big',
//                         name: 'Đất Nền 69',
//                         group: 3
//                     }
//                 ],
//                 project: {
//                     id: 'project2',
//                     name: 'Anh Dũng II - Sao Đỏ I'
//                 },
//                 owner: {
//                     id: '10000',
//                     name: 'NVT',
//                     phone: '098888828'
//                 },
//                 price: 1111,
//                 publicPrice: 2222,
//                 originPrice: 3333,
//                 currency: 'VND',
//                 note: 'Chỉ share cho cubin 2',
//                 privacy: 'friend',
//                 friends: [
//                     {
//                         id: '222',
//                         name: 'aaa'
//                     },
//                     {
//                         id: '333',
//                         name: 'bbb'
//                     }
//                 ],
//                 isActive: true,
//                 createdBy: {
//                     id: '1000',
//                     name: 'Thanh Nguyen'
//                 }
//             },
//             activeProduct2: {
//                 _id: '2',
//                 name: 'BĐS 001',
//                 description: 'BĐS 001',
//                 attributes: {
//                     price: 1234
//                 },
//                 images: [],
//                 province: {
//                     code: '001',
//                     name: 'HCM'
//                 },
//                 district: {
//                     code: '011',
//                     name: 'Q1'
//                 },
//                 ward: {
//                     code: '111',
//                     name: 'Tan Binh'
//                 },
//                 address: '63D3 Khu biệt thự vườn đào',
//                 location: {
//                     latitude: 0.9,
//                     longitude: 9.3
//                 },
//                 categories: [
//                     {
//                         id: 'car',
//                         name: 'Ô tô',
//                         group: 1
//                     },
//                     {
//                         id: 'car_mes',
//                         name: 'Ô tô mes',
//                         group: 2
//                     },
//                     {
//                         id: 'car_mes_c',
//                         name: 'Ô tô mes C',
//                         group: 3
//                     }
//                 ],
//                 project: {
//                     id: 'project1',
//                     name: 'Anh Dũng II - Sao Đỏ I'
//                 },
//                 owner: {
//                     id: '10000',
//                     name: 'NVT',
//                     phone: '098888828'
//                 },
//                 price: 1000000,
//                 publicPrice: 2000000,
//                 originPrice: 3000000,
//                 currency: 'VND',
//                 note: 'Chỉ share cho cubin 2',
//                 privacy: 'friend',
//                 friends: [
//                     {
//                         id: '222',
//                         name: 'aaa'
//                     },
//                     {
//                         id: '333',
//                         name: 'bbb'
//                     }
//                 ],
//                 isActive: true,
//                 createdBy: {
//                     id: '1000',
//                     name: 'Thanh Nguyen'
//                 }
//             },
//             inactiveProduct: {
//                 _id: '54321',
//                 name: 'BĐS 002',
//                 description: 'BĐS 002',
//                 attributes: {
//                     price: 1234
//                 },
//                 images: [],
//                 province: {
//                     code: '002',
//                     name: 'HCM'
//                 },
//                 district: {
//                     code: '022',
//                     name: 'Q1'
//                 },
//                 ward: {
//                     code: '222',
//                     name: 'Tan Binh'
//                 },
//                 address: '63D3 Khu biệt thự vườn đào',
//                 location: {
//                     latitude: 0.9,
//                     longitude: 9.3
//                 },
//                 categories: [
//                     {
//                         id: 'land',
//                         name: 'Bất Động Sản',
//                         group: 1
//                     },
//                     {
//                         id: 'land_house',
//                         name: 'Nhà Đất',
//                         group: 2
//                     },
//                     {
//                         id: 'land_house_big',
//                         name: 'Đất Nền 69',
//                         group: 3
//                     }
//                 ],
//                 project: {
//                     id: 'project2',
//                     name: 'Anh Dũng II - Sao Đỏ I'
//                 },
//                 owner: {
//                     id: '10000',
//                     name: 'NVT',
//                     phone: '098888828'
//                 },
//                 price: 1111,
//                 publicPrice: 2222,
//                 originPrice: 3333,
//                 currency: 'VND',
//                 note: 'Chỉ share cho cubin 2',
//                 privacy: 'friend',
//                 friends: [
//                     {
//                         id: '222',
//                         name: 'aaa'
//                     },
//                     {
//                         id: '333',
//                         name: 'bbb'
//                     }
//                 ],
//                 isActive: false,
//                 createdBy: {
//                     id: '1000',
//                     name: 'Thanh Nguyen'
//                 }
//             }
//         };

//         await Product.deleteMany({});
//         await Product.insertMany(values(dbProducts));
//     });

//     /** get list product */
//     describe('GET /api/v1/products', () => {
//         it('should get all products no params', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(2);
//                 });
//         });
//         it('should get all products with params skip 0, limit 1', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ skip: 1, limit: 1 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(1);
//                 });
//         });
//         it('should get all products with params skip 1, limit 1', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ skip: 1, limit: 1 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(1);
//                 });
//         });
//         it('should get all products with params provinceId', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ provinceId: '002' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(1);
//                 });
//         });
//         it('should get all products with params districtId', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ districtId: '022' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(1);
//                 });
//         });
//         it('should get all products with params wardId', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ wardId: '222' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(1);
//                 });
//         });
//         it('should get all products with params projectId', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ projectId: 'project1' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(1);
//                 });
//         });
//         it('should get all products with params categoryId', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ categoryId: 'car_messs' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(0);
//                 });
//         });
//         it('should get all products with params minPrice', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ minPrice: 1000000 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(1);
//                 });
//         });
//         it('should get all products with params maxPrice', () => {
//             return request(app)
//                 .get('/api/v1/products')
//                 .set('Authorization', token)
//                 .query({ maxPrice: 1000000 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.forms).to.be.an('array');
//                     expect(res.body.forms).to.have.lengthOf(2);
//                 });
//         });
//     });

//     /** create product */
//     describe('POST /api/v1/products', () => {
//         it('create product correct', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(dataInsert)
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: name', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { name: {} }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('name');
//                 });
//         });
//         it('create product field name', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'name'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('name');
//                 });
//         });
//         it('create product incorrect: images', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { images: {} }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('images');
//                 });
//         });
//         it('create product not field images', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'images'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: content', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { content: {} }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('content');
//                 });
//         });
//         it('create product not field content', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'content'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: attributes', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { attributes: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('attributes');
//                 });
//         });
//         it('create product not field attributes', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'attributes'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('attributes');
//                 });
//         });
//         it('create product incorrect: categories', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { categories: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('categories');
//                 });
//         });
//         it('create product not field categories', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'categories'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('categories');
//                 });
//         });
//         it('create product incorrect: project', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { project: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('project');
//                 });
//         });
//         it('create product not field project', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'project'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: owner', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { owner: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('owner');
//                 });
//         });
//         it('create product not field owner', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'owner'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: location', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { location: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('location');
//                 });
//         });
//         it('create product not field location', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'location'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: address', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { address: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('address');
//                 });
//         });
//         it('create product not field address', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'address'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: country', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { country: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('country');
//                 });
//         });
//         it('create product not field country', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'country'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: province', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { province: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('province');
//                 });
//         });
//         it('create product not field province', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'province'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: district', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { district: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('district');
//                 });
//         });
//         it('create product not field district', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'district'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: ward', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { ward: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('ward');
//                 });
//         });
//         it('create product not field ward', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'ward'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: price', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { price: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('price');
//                 });
//         });
//         it('create product not field price', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'price'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: currency', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { currency: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('currency');
//                 });
//         });
//         it('create product not field currency', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'currency'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: originPrice', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { originPrice: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('originPrice');
//                 });
//         });
//         it('create product not field originPrice', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'originPrice'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: publicPrice', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { publicPrice: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('publicPrice');
//                 });
//         });
//         it('create product not field publicPrice', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'publicPrice'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: note', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { note: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('note');
//                 });
//         });
//         it('create product not field note', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'note'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('create product incorrect: privacy', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { privacy: [] }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('privacy');
//                 });
//         });
//         it('create product not field privacy', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'privacy'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('create product incorrect: friends', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, dataInsert, { friends: {} }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('friends');
//                 });
//         });
//         it('create product privacy: friend, not field friends', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(omit(dataInsert, 'friends'))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('friends');
//                 });
//         });
//         it('create product privacy: private, not field friends', () => {
//             return request(app)
//                 .post('/api/v1/products')
//                 .set('Authorization', token)
//                 .send(Object.assign({}, omit(dataInsert, 'friends'), { privacy: 'private' }))
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//     });

//     /** update product */
//     describe('PUT /api/v1/products', () => {
//         it('update name incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ name: { a: 'test001' } })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('name');
//                 });
//         });
//         it('update name correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ name: dataInsert.name })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update images incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ images: { a: 'test001' } })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('images');
//                 });
//         });
//         it('update images correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ images: dataInsert.images })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update content incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ content: { a: 'test001' } })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('content');
//                 });
//         });
//         it('update content correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ content: dataInsert.content })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update attributes incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ attributes: 'test001' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('attributes');
//                 });
//         });
//         it('update attributes correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ attributes: dataInsert.attributes })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update categories incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ categories: 'test001' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('categories');
//                 });
//         });
//         it('update categories correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ categories: dataInsert.categories })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update project incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ project: 'test001' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('project');
//                 });
//         });
//         it('update project correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ project: dataInsert.project })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update owner incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ owner: 'test001' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('owner');
//                 });
//         });
//         it('update owner correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ owner: dataInsert.owner })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update location incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ location: 'test001' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('location');
//                 });
//         });
//         it('update location correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ location: dataInsert.location })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update address incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ address: {} })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('address');
//                 });
//         });
//         it('update address correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ address: dataInsert.address })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update country incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ country: {} })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('country');
//                 });
//         });
//         it('update country correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ country: dataInsert.country })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update province incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ province: 'test123' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('province');
//                 });
//         });
//         it('update province correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ province: dataInsert.province })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update district incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ district: 'test123' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('district');
//                 });
//         });
//         it('update district correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ district: dataInsert.district })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update ward incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ ward: 'test123' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('ward');
//                 });
//         });
//         it('update ward correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ ward: dataInsert.ward })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update price incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ price: 'test123' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('price');
//                 });
//         });
//         it('update price correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ price: dataInsert.price })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update currency incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ currency: 123 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('currency');
//                 });
//         });
//         it('update currency correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ currency: dataInsert.currency })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update originPrice incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ originPrice: 'test123' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('originPrice');
//                 });
//         });
//         it('update originPrice correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ originPrice: dataInsert.originPrice })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update publicPrice incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ publicPrice: 'test123' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('publicPrice');
//                 });
//         });
//         it('update publicPrice correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ publicPrice: dataInsert.publicPrice })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update note incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ note: {} })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('note');
//                 });
//         });
//         it('update note correct', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ note: dataInsert.note })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update privacy incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ privacy: {} })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('privacy');
//                 });
//         });
//         it('update privacy: private', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ privacy: 'private' })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(0);
//                 });
//         });
//         it('update privacy: friend, friend incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .send({ privacy: 'friend', friends: {} })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                     expect(res.body.errors[0].field).to.equal('friends');
//                 });
//         });
//     });

//     /** product detail */
//     describe('GET /api/v1/products/:id', () => {
//         it('detail product id incorrect', () => {
//             return request(app)
//                 .get('/api/v1/products/3123123122')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(404);
//                 });
//         });
//         it('detail product id correct', () => {
//             return request(app)
//                 .get('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.not.equal(404);
//                 });
//         });
//     });

//     /** delete product */
//     describe('DELETE /api/v1/products/:id', () => {
//         it('delete product id incorrect', () => {
//             return request(app)
//                 .delete('/api/v1/products/3123123122')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(404);
//                 });
//         });
//         it('delete product id correct', () => {
//             return request(app)
//                 .delete('/api/v1/products/1')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.not.equal(404);
//                 });
//         });
//     });

//     /** share product to friend */
//     describe('PUT /api/v1/products/:id/share', () => {
//         it('share product note incorrect, not friends', () => {
//             return request(app)
//                 .put('/api/v1/products/3123123122/share')
//                 .set('Authorization', token)
//                 .send({
//                     note: {}
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('share product note correct, not friends', () => {
//             return request(app)
//                 .put('/api/v1/products/2/share')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .send({
//                     note: 'note1234'
//                 })
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.not.equal(404);
//                     expect(res.body.code).to.not.equal(400);
//                 });
//         });
//         it('share product not note, friends incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/2/share')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .send({
//                     friends: {}
//                 })
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('share product not note, friends correct', () => {
//             return request(app)
//                 .put('/api/v1/products/2/share')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .send({
//                     friends: [{ id: '222', name: 'dasdasd' }, { id: '121', name: 'weqeqw' }]
//                 })
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.not.equal(404);
//                     expect(res.body.code).to.not.equal(400);
//                 });
//         });
//         it('share product note incorrect, friends correct', () => {
//             return request(app)
//                 .put('/api/v1/products/3123123122/share')
//                 .set('Authorization', token)
//                 .send({
//                     note: {},
//                     friends: [{ id: '222', name: 'dasdasd' }, { id: '121', name: 'weqeqw' }]
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('share product note correct, friends incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/3123123122/share')
//                 .set('Authorization', token)
//                 .send({
//                     note: 'note11111111',
//                     friends: {}
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('share product note correct, friends correct', () => {
//             return request(app)
//                 .put('/api/v1/products/2/share')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .send({
//                     note: 'note11111111',
//                     friends: [{ id: '012', name: 'dasdasd' }, { id: '123', name: 'weqeqw' }]
//                 })
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.not.equal(404);
//                     expect(res.body.code).to.not.equal(400);
//                 });
//         });
//     });

//     /** unshare product to friend */
//     describe('PUT /api/v1/products/:id/unshare', () => {
//         it('unshare product note incorrect, not friends', () => {
//             return request(app)
//                 .put('/api/v1/products/3123123122/unshare')
//                 .set('Authorization', token)
//                 .send({
//                     note: {}
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('unshare product note correct, not friends', () => {
//             return request(app)
//                 .put('/api/v1/products/2/share')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .send({
//                     note: 'note1234'
//                 })
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.not.equal(404);
//                     expect(res.body.code).to.not.equal(400);
//                 });
//         });
//         it('unshare product not note, friends incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/2/unshare')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .send({
//                     friends: {}
//                 })
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('unshare product not note, friends correct', () => {
//             return request(app)
//                 .put('/api/v1/products/2/unshare')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .send({
//                     friends: [{ id: '222', name: 'dasdasd' }, { id: '121', name: 'weqeqw' }]
//                 })
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.not.equal(404);
//                     expect(res.body.code).to.not.equal(400);
//                 });
//         });
//         it('unshare product note incorrect, friends correct', () => {
//             return request(app)
//                 .put('/api/v1/products/3123123122/unshare')
//                 .set('Authorization', token)
//                 .send({
//                     note: {},
//                     friends: [{ id: '222', name: 'dasdasd' }, { id: '121', name: 'weqeqw' }]
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('unshare product note correct, friends incorrect', () => {
//             return request(app)
//                 .put('/api/v1/products/3123123122/unshare')
//                 .set('Authorization', token)
//                 .send({
//                     note: 'note11111111',
//                     friends: {}
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.equal(400);
//                 });
//         });
//         it('unshare product note correct, friends correct', () => {
//             return request(app)
//                 .put('/api/v1/products/2/unshare')
//                 .set('Authorization', token)
//                 .expect('Content-Type', /json/)
//                 .send({
//                     note: 'note11111111',
//                     friends: [{ id: '012', name: 'dasdasd' }, { id: '123', name: 'weqeqw' }]
//                 })
//                 .expect(httpStatus.OK)
//                 .then((res) => {
//                     expect(res.body.code).to.not.equal(404);
//                     expect(res.body.code).to.not.equal(400);
//                 });
//         });
//     });
// });
