import convict from 'convict';


const config = convict({
    bitbucket: {
        baseUrl: {
            doc:     'The bitbucket API base url.',
            default: null,
            format:  String,
            env:     'BITBUCKET_API_BASE_URL'
        },
        basicAuthUser: {
            doc:     'The bitbucket API basic http auth user.',
            default: null,
            format:  String,
            env:     'BITBUCKET_API_BASIC_AUTH_USER'
        },
        basicAuthKey: {
            doc:     'The bitbucket API basic http auth password.',
            default: null,
            format:  String,
            env:     'BITBUCKET_API_BASIC_AUTH_PASSWORD'
        }
    }
});


export default config;
