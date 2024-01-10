import TextField from 'components/common/TextField';

const Signin = () => {
  return (
    <div className='signin'>
      <div
        className='container'
        style={{ maxWidth: 400, margin: '0 auto', paddingTop: 32 }}
      >
        <div className='row'>
          <div className='col'>
            <main style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h1>TextField</h1>
              <TextField
                inputProps={{
                  type: 'email',
                  placeholder: 'placeholder',
                }}
                label='이메일'
                error={false}
              />
              <TextField
                inputProps={{
                  type: 'email',
                  placeholder: 'placeholder',
                }}
                label='이메일'
                message='이메일을 입력해주세요.'
                error={true}
              />
              <TextField
                inputProps={{
                  type: 'password',
                  placeholder: 'placeholder',
                }}
                label='비밀번호'
                error={false}
              />
              <TextField
                inputProps={{
                  type: 'password',
                  placeholder: 'placeholder',
                }}
                label='비밀번호'
                message='비밀번호를 입력해주세요.'
                error={true}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
