// Security Concerns
// No SQL injection here

// Cors -> Cross origin resource sharing

// DDOS -> Distributed Denial of service

// XSS- > Cross sight script

// Bombard multiple sources send requests that servers goes down. (Denial Server error)

// Authentication-> Request from user of sign in + Password in db encryption(hashed, crypto, bcrypt)

// CORS->
// Restricted resources on webpage
// Domain A sends request and servers is responding
// same server domaina.com to domaina.com

// Different origin request(Cross)
// GET request fulfilled
// other requests not responded but blocked (http methods patch put delete)
// same origin also accepted
// Cross blocked by CORS

// Working:
// Headers attached by request(origin, method, json)

// Allow disallow methods
// Request Headers
// Response Headers

// Access control allow origin (specific ip allowed like admin)

// Middleware setPermissions custom
// * -> all methods, origins, headers, credentials
// or ',' separated methods, origins, headers, credentials

// Built-in middleware CORS
// install and
// app.use(cors()) //default
// app.use(cors(//setting options))

// DDOS

// express-rate-limit package

// maintains requests frequency
// blocks ip with excessive frequencies
// delay->millisec ms

// XSS
// Helmet middleware package
// Block well known web vulnerabilities

// Authentication:
// 1. Authenticate user
// 	local basic auth -> not used
// 	passport based local->
// 	third party->

// 2. Info availability
// 	sessions -> not used
// 	tokens JWT

//Verifying user identity
//weakest link user password
//no password in database

//Basic Auth
//base64 hashing
//basicAuth middleware
//Authentication: Basic (Protocal)
//Username:password -> base64 hashing
//standard and not reliable

//Third party Auth
//fb google (OAuth, openID(google), Oauth2(fb))
//easy to develop
//trusted social platforms
//Login->third party->authorised
//

//Passport based local authentication
//local
//fb twitter
//mongoose local

//USER information management
//sessions(stateful) -> by default on server side ->in RAM by default -> so ended after restarting
// take to mongodb, filestore, redis to keep stateful and free from server restarting
//local storage on client side
//jwt(stateless)

//cookies->file(enteries)
//types
//session cookies (non persistent)
//persistent cookies (persistent) //task scheduler
//ever cookies (used for viruses)(rereplicate itself)

// normal or signed
//normal->readable
//signed->hashed
//cookie parser (express auto)
//but for signed cookies
//req.signedCookies.name
//key value pairs

//name=value
//expiration date
//domain->type of domain
//path->location(by default /)
//diff protocols possible

//SESSIONS in Express
//express-session
//require
//managed automatically, we don't need to manually cookies,
//store session state, handle,create,fetch sessions
//app.use(session({secret:'secret'})) -> secret password
//req.session -> obj -> read and write
//req.session.name = 'maarij' ->added in session
//if(req.session.name) //check session name setting

//store session in filestore
//pass in store:FileStore

//store session in db
//two ways
//1. store: new (require('express-session')){
//     storage: 'mongodb',
//     instance:'mongoose'
// }

//2. store
//
//Destroy by .destroy() method

//faker is a module to generate fake data
//fake.name.firstname
//fake.internet.username

//Passport based local authentication
//passportjs middleware
//authentication not authorization
//local, third party both by passport
//encapsulate
//140+ authentication stategies
//supports OpenID and OAuth protocols
//app.post('/login',passport.authenticate('local'){
//     successRedirect:
//     failureRedirect:
// })
//intall passport
//then install strategies
//then configure middleware like mounting
//then sessions / jwt

//Auth Strategies
//first strategy like local or fb
//{err, success, msg}
//then start middleware

// if sessions then following sequence
//first session
//then passport
//then session to passport

//sessions is optional part for passport
//2 fn as it is
//serializeUser
//deserializeUser
//save data for sniffing
//disable sessions->false

//Passport main fn
//passport.authenticate()
//401 unauthorized
//options  ***IMP***
//redirects
//success and failure
//flash message option then redirect in both above cases
//success/failureflash true or msg option 3 or 5 sec default
//
//Express Quiz saturday

//Strategies

//1. Local Strategy
//install-passport
//install-passport-local
//apni logic
//username matching
//then password matching
//
//renaming possible if username field name if different
//
//password must be hashed
//hashing is one way
//hash to password -> NP
//
//LOGIN WITH HASHING
//get data
//hash password
//find user by username
//check if hashed are equal
//md5, sha-1, sha-2, sha-256
//bcrypt and crypto
//hash and compare fn
//
//bits -> bits stuffing -> fliping bits e.g 4th bit, and reversed on receiving side
//

//passport-local-mongoose
//no password field
//username hash salt, if other fields then add manually and pass then add it to plugin
//no crypto
//no code for schema and authentication
//just call methods

//lms repo

//three things in app.js
//use local policy pass just authenticate fn
//serialize user
//deserialize user

//TWITTER POLICY
//twitter api key
//oauth 1 and 2 both
//fb oauth 2 and google openid
//sign in using twitter
//npm i passport-twitter
//key getting
//apps.twitter.com
//login with twitter account with some following
//form for what reason
//reason is 3rd party authentication
//study purpose
//local use
//not for selling
//mail why do want to get api
//reason local research purpose
//mail why do want to get it
//reason local research purpose

//website -> give 127.0.0.1 not localhost
//key and secret
//callback url for results

//login with twitter
//login route auth/twitter
//.authenticate(twitter) called twitter strategy
//callback, success, failure
//token token secret also returned
//username and profile returned
//profile id, profile name, email, middlename, familyname

//FB POLICY
//developers.fb.com
//client id, client secret but in twitter its of consumer

//JWT POLICY TOKEN
//validate info
//cookies or token based
//hybrid app so sessions becomes problem
//TOKEN types
//1.JWT
//2.SAML
//3.SWT simple web token

//JWT PARTS v.imp v.imp v.imp
//headers->token info, head, hashed,
//payload->data part
//signature->algos, hashing algorithms

//headers
//alogos
//token type

//payload
//anyting
//subject name password userid

//signature
//password and secret to hash

//end result is encoded string
// two dots . .
//header.payload.signature

//user logins for first time
//system issues token
//send to frontend app
//stored on brower local storage
//no info on server
//attach token and send to server
//server dehash and verify data
//if token is deleted then logout

//jsonwebtoken library
//two methods
//verify()-> verify token
//sign()-> to generate token

//server file, connfig.js, middleware.js
//env variables to
//e.g path

//verification
//authorization.Bearer token
//get token header
//then separate bearer
//then verify token
//if decoded then valid

//token generation
//login
//then sign method to generate token
//first part is payload then secret and then expiration time usually not provided
//send token to user
//saved in frontend

//if using passport and local mongoose
//jwt strategy
//same sign fn to generate token
//but verify method is change
//exptract payload
//then options field
//ExtractJwt.fromAuthHeaderAsBearerToken()
//config.secret
//find user by payload.id-> user verification
//and then user authentication

//login user
//verification
//return token by jwt.sign()

//classes info to user then authenticate user
//class assignment then verify cors(whitelist->possible ip(s) of admin) verify user(token) and verify admin(admin:true)
//LMS repo
//write routes in this code
