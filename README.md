#Application

##Commands##

#### Add Database ####
- npm install --save loopback-connector-mongodb
- slc loopback:datasource

#### Add Model ####
- slc loopback:model user

#### Add relationship ####
- slc loopback:relation

#### Add Access Control List ####
- slc loopback:acl

#### Run Server ####
- slc arc


## Useful Methods ##
#### remote hooks: ####
- beforeRemote() runs before the remote method.
- afterRemote() runs after the remote method.
