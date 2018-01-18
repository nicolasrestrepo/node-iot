'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // define relationships between agent and metric
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  // check if we have a connection to db
  await sequelize.authenticate()

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
