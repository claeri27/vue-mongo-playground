'use strict'
const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const secret = require('../user/user.model')

let router = new Router({
  prefix: '/api/auth'
})

router
  .post('/login', async (ctx) => {
    try {
      let email = ctx.request.body.email
      let password = ctx.request.body.password
      let user = await User.findOne({ email: email.toLowerCase() })

      if (!user) {
        ctx.throw(404, 'This email is not registered.')
      }

      let authenticated = await user.comparePassword(password)
      if (!authenticated) {
        ctx.throw(401, 'This password is not correct')
      } else {
        let token = await jwt.sign({ id: user._id, role: user.role }, secret, {
          expiresIn: '1d'
        })
        ctx.body = { token: token }
      }
    } catch (err) {
      throw err
    }
  })

module.exports = router
