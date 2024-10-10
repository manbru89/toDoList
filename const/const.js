const status = {
  open:'open',
  deleted:'deleted',
}

const userStatus = {
  pending: 'pending',
  active: 'active',
}
const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n'+
'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\n'+
'-----END RSA PRIVATE KEY-----'

const publicKey = '';

export {
  status,
  userStatus,
  privateKey,
  publicKey,
}