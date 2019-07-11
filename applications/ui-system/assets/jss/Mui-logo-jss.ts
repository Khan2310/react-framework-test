import WebFont from 'webfontloader';


WebFont.load({
    google: {
        families: ['Lato:,300,400,700']
    },
    timeout: 2000
})

export const ButtonJss: any = ({
    '@global': {
        '.MuiButton-root': {
            padding: '8px 25px',
            border: 'none',
            fontFamily: [['Lato'],'!important'],
            borderRadius: 4,
            transition: ['all', '0.15s', 'ease-in-out'],
            textTransform: 'none',
            '&[disabled], &.disabled': {
                pointerEvents: 'none',
                filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)',
                opacity: 0.5
            },
            '&.button-icon-left, &.button-icon-right': {
                padding: [12, 15],
            },
            '&.button-icon-left [class^="Icon-"]': {
                marginRight: 10,
                float: 'left',
                fontSize: 16
            },
            '&.button-icon-right [class^="Icon-"]': {
                marginLeft: 10,
                float: 'right',
                fontSize: 16
            },
            '&.button-large': {
                padding: [17, 60],
                fontSize: 17
            },
            '&.button-circular': {
                fontSize: 34,
                padding: 0,
                backgroundColor: '#474F9C',
                color: '#ffffff',
                width: 84,
                height: 84,
                borderRadius: '50%',
                '&:hover': {
                    backgroundColor: 'rgba(71, 79, 156, 0.9)',
                }
            },
            fallbacks: {fontFamily: 'sans-serif'}
        }
    },
        buttonLink: {
            background: 'none',
            border: 'none',
            outline: 'none',
            padding: 0,
            cursor: 'pointer',
            color: '#474F9C',
            fontFamily: 'Lato',
            fontSize: 14,
            fontWeight: 700,
            '&:hover': {
                textDecoration: 'underline'
            },
            fallbacks: {fontFamily: 'sans-serif'}
        },
        buttonPrimary: {
            backgroundColor: '#474F9C',
            color: '#ffffff',
            '&:hover': {
                backgroundColor: 'rgba(71, 79, 156, 0.9)'
            }
        },
        buttonSecondary: {
            backgroundColor: '#CBD4DF',
            color: '#79838F',
            '&:hover': {
                backgroundColor: 'rgba(203, 212, 223, 0.9)'
            }
        }
});