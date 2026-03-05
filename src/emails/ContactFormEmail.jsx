import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Font,
  Link,
} from '@react-email/components';
import * as React from 'react';

export const ContactFormEmail = ({ name, email, message, date }) => (
  <Html>
    <Head>
      <Font
        fontFamily="Inter"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.gstatic.com/s/inter/v12/UcCOjFwrE3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>New message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Heading style={h1}>You&apos;ve got a new message</Heading>
        </Section>

        <Hr style={hr} />

        <Section style={contentSection}>
          <table style={metadataTable}>
            <tr>
              <td style={labelCell}>From</td>
              <td style={valueCell}>{name}</td>
            </tr>
            <tr>
              <td style={labelCell}>Email</td>
              <td style={valueCell}>
                <Link href={`mailto:${email}`} style={{ color: '#d4d4d8', textDecoration: 'none' }}>{email}</Link>
              </td>
            </tr>
            <tr>
              <td style={labelCell}>Sent</td>
              <td style={valueCell}>{date}</td>
            </tr>
          </table>

          <Text style={label}>Message</Text>
          <div style={messageBox}>
            <Text style={messageText}>
              {message}
            </Text>
          </div>
        </Section>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Text style={footerText}>
            Sent via your portfolio contact form.
          </Text>
          <Text style={brandingText}>
            Proudly sent through <Link href="https://resend.com" style={brandingLink}>Resend</Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: '#050505',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: '20px 0',
};

const container = {
  backgroundColor: '#0a0a0a',
  margin: '40px auto',
  padding: '40px',
  borderRadius: '12px',
  border: '1px solid #1a1a1a',
  maxWidth: '600px',
};

const headerSection = {
  marginBottom: '24px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '600',
  letterSpacing: '-0.02em',
  margin: '0',
};

const contentSection = {
  padding: '12px 0',
};

const metadataTable = {
  marginBottom: '24px',
  width: '100%',
};

const labelCell = {
  color: '#52525b',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  width: '70px',
  paddingBottom: '8px',
  verticalAlign: 'middle',
};

const valueCell = {
  color: '#d4d4d8',
  fontSize: '15px',
  lineHeight: '1.4',
  paddingBottom: '8px',
  verticalAlign: 'middle',
};

const label = {
  color: '#52525b',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '8px',
  marginTop: '0',
  display: 'block',
};

const messageBox = {
  backgroundColor: '#111111',
  borderRadius: '8px',
  border: '1px solid #1a1a1a',
  padding: '20px',
};

const messageText = {
  color: '#e4e4e7',
  fontSize: '15px',
  lineHeight: '1.7',
  margin: '0',
  whiteSpace: 'pre-wrap',
};

const hr = {
  borderColor: '#1a1a1a',
  margin: '24px 0',
};

const footerSection = {
  marginTop: '12px',
};

const footerText = {
  color: '#3f3f46',
  fontSize: '12px',
  textAlign: 'center',
  margin: '0',
};

const brandingText = {
  color: '#52525b',
  fontSize: '11px',
  textAlign: 'center',
  marginTop: '12px',
  letterSpacing: '0.02em',
};

const brandingLink = {
  color: '#71717a',
  textDecoration: 'underline',
};

const footerLink = {
  color: '#52525b',
  textDecoration: 'underline',
};
