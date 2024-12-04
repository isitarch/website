import type { Config } from 'tailwindcss'

export default {
    content: ['./components/**/*.{vue,js,ts}', './pages/**/*.{vue,js,ts}', './content/**/*.{md,mdx}'],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.cyan.400'),
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            '&:hover': {
                                color: theme('colors.cyan.300'),
                                textDecoration: 'none',
                            },
                        },
                        'h1 a,h2 a,h3 a,h4 a,h5 a': {
                            textDecoration: 'none'
                        },
                        h1: {
                            color: theme('colors.cyan.400'),
                            fontWeight: 'bold',
                            fontSize: theme('fontSize.3xl'),
                            borderBottomWidth: '2px',
                            borderBottomColor: theme('colors.cyan.400'),
                            paddingBottom: theme('spacing.2'),
                        },
                        h2: {
                            color: theme('colors.cyan.300'),
                            fontWeight: 'semibold',
                            fontSize: theme('fontSize.2xl'),
                            marginTop: theme('spacing.6'),
                            marginBottom: theme('spacing.4'),
                            borderBottomWidth: '2px',
                            borderBottomColor: theme('colors.gray.600'),
                            paddingBottom: theme('spacing.1')
                        },
                        h3: {
                            color: theme('colors.cyan.300'),
                            fontWeight: 'bold',
                            fontSize: theme('fontSize.lg'),
                            marginTop: theme('spacing.6'),
                            marginBottom: theme('spacing.2'),
                            borderBottomWidth: '1px',
                            borderBottomColor: theme('colors.gray.600'),
                            paddingBottom: theme('spacing.1'),
                        },
                        p: {
                            marginTop: theme('spacing.4'),
                            marginBottom: theme('spacing.4'),
                        },
                        'ul, ol': {
                            marginTop: theme('spacing.4'),
                            marginBottom: theme('spacing.4'),
                        },
                        ul: {
                            marginTop: theme('spacing.4'),
                            marginBottom: theme('spacing.4'),
                            paddingLeft: theme('spacing.8'),
                            listStyleType: 'disc',
                        },
                        'ul > li': {
                            marginBottom: theme('spacing.2'),
                            lineHeight: theme('lineHeight.relaxed'),
                            '&::marker': {
                                color: theme('colors.cyan.400'),
                                fontWeight: 'bold',
                            },
                        },
                        ol: {
                            marginTop: theme('spacing.4'),
                            marginBottom: theme('spacing.4'),
                            paddingLeft: theme('spacing.8'),
                            listStyleType: 'decimal',
                        },
                        'ol > li': {
                            marginBottom: theme('spacing.2'),
                            '&::marker': {
                                color: theme('colors.cyan.400'),
                                fontWeight: 'bold',
                            },
                        },
                        blockquote: {
                            quotes: 'none',
                            fontStyle: 'italic',
                            color: theme('colors.gray.400'),
                            borderLeftWidth: '4px',
                            borderLeftColor: theme('colors.cyan.400'),
                            marginTop: theme('spacing.2'),
                            marginBottom: theme('spacing.2'),
                            backgroundColor: theme('colors.gray.800'),
                            borderRadius: theme('borderRadius.md'),
                            paddingLeft: theme('spacing.8'),
                            paddingRight: theme('spacing.8'),
                            paddingTop: theme('spacing.1'),
                            paddingBottom: theme('spacing.1'),
                        },
                        code: {
                            color: theme('colors.cyan.400'),
                            backgroundColor: theme('colors.gray.800'),
                            padding: theme('spacing.1'),
                            borderRadius: theme('borderRadius.md'),
                        },
                        pre: {
                            color: theme('colors.gray.100'),
                            backgroundColor: theme('colors.gray.900'),
                            padding: theme('spacing.4'),
                            borderRadius: theme('borderRadius.lg'),
                            overflowX: 'auto',
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}