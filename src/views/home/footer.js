import { Box, Grid, IconButton, Link, Typography } from '@mui/material';
import React from 'react';
import { Colors } from '../../components/themes/colors';
// import { AppLogo } from "../../components/svg/logo-dark-bg"
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from '../../components/svg';
import { Fonts } from '../../components/themes/fonts';
// import AppLogo from "../../components/svg/applogo"
import Image from 'next/image';
import {
  FOOTER_COMPANY,
  FOOTER_COURSES,
  FOOTER_NOTE,
  FOOTER_SCHOLARSHIP,
} from '../../utils/contants';

export default function FooterPage() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        background: Colors.secondary,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 7.25,
      }}>
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 4, lg: 10, xl: 9 },
          pl: { xs: 4, sm: 3, lg: 5, xl: 16 },
          pr: { xs: 2, lg: 0, xl: 16 },
          py: { xs: 3, md: '56px' },
        }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: 320,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}>
          <Link underline="none" href="/" sx={{ width: 200 }}>
            <Image
              src="/images/logo.png"
              width={150}
              height={28}
              alt="logo"
              layout="fixed"
            />
          </Link>
          <Typography
            variant="span"
            sx={{
              maxWidth: '100%',
              font: {
                xs: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                md: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
              },
              color: '#87A0A8',
              textAlign: { xs: 'left', sm: 'left' },
            }}>
            {FOOTER_NOTE}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'left',
              mt: { xs: 2, lg: 8 },
              color: Colors.primary,
              font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
            }}>
            Address
          </Typography>
          <Typography
            variant="span"
            sx={{
              maxWidth: '100%',
              font: {
                xs: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                md: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
              },
              color: '#87A0A8',
              textAlign: { xs: 'left', sm: 'left' },
            }}>
            No 56 Labito crescent wuse 2 federal capital Territory Abuja,
            Nigeria
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: 1616,
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'flex-start', sm: 'space-between' },
            alignItems: 'center',
          }}>
          <Grid container spacing={{ xs: 3, lg: 8 }}>
            <Grid item xs={4} sm={3} md={4} >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: 'flex-start',
                  ml: { xs: 0, sm: 4, lg: 6, xl: 3 },
                }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: 'left',
                    color: Colors.primary,
                    font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                  }}>
                  Company
                </Typography>
                {FOOTER_COMPANY.map((company, index) => (
                  <Link
                    key={`${company}_${index}`}
                    underline="hover"
                    href={company.href}
                    sx={{
                      textAlign: 'left',
                      color: '#E6F4ED',
                      font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                      letterSpacing: '0em',
                    }}>
                    {company.title}
                  </Link>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={4} sm={3} md={4} >
              <Box
                sx={{
                  width: { xs: '100%', sm: 146 },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: 'left',
                    color: Colors.primary,
                    font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                  }}>
                  Resources
                </Typography>
                
                <Link
                  underline="hover"
                  href="#faqs"
                  sx={{
                    textAlign: 'left',
                    color: '#E6F4ED',
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: '0em',
                  }}>
                  FAQs
                </Link>
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    textAlign: 'left',
                    color: '#E6F4ED',
                    font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                    letterSpacing: '0em',
                  }}>
                  How to get started
                </Link>
              </Box>
            </Grid>

            <Grid item xs={4} sm={3} md={4} >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: 'flex-start',
                  ml: { xs: 0, sm: 4, lg: 6, xl: 3 },
                }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: 'left',
                    color: Colors.primary,
                    font: `normal normal 600 normal 14px/20px ${Fonts.inter}`,
                  }}>
                  Scholarships
                </Typography>
                {FOOTER_SCHOLARSHIP.map((company, index) => (
                  <Link
                    key={`${company}_${index}`}
                    underline="hover"
                    href={company.href}
                    sx={{
                      textAlign: 'left',
                      color: '#E6F4ED',
                      font: `normal normal 600 normal 14px/24px ${Fonts.inter}`,
                      letterSpacing: '0em',
                    }}>
                    {company.title}
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '64px',
          padding: '48px 0 48px 0',
          borderTop: `1px solid #1B3139`,
          background: Colors.secondary,
          mb: { xs: '45px', sm: 0 },
        }}>
        <Box
          sx={{
            width: '90%',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            height: 24,
            px: { xs: 3, lg: 8, xl: 16 },
            gap: '10px',
          }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'left',
              color: Colors.light,
              display: { xs: 'none', sm: 'flex' },
              font: `normal normal 400 normal 16px/24px ${Fonts.inter}`,
              letterSpacing: '0em',
            }}>
            © {year} eduvacity. All rights reserved.
          </Typography>
          <Box sx={{ maxWidth: 500, display: 'flex', gap: '24px' }}>
            {' '}
            <IconButton>
              <Link
                underline="none"
                href="https://x.com/eduvacity"
                target="_blank">
                <Twitter />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.linkedin.com/eduvasity/"
                target="_blank">
                <LinkedIn />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.facebook.com/eduvacity/"
                target="_blank">
                <Facebook />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.youtube.com/eduvacity/"
                target="_blank">
                <Youtube />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.instagram.com/eduvacity/"
                target="_blank">
                <Instagram />
              </Link>
            </IconButton>
          </Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'left',
              color: Colors.light,
              display: { xs: 'flex', sm: 'none' },
              font: `normal normal 400 normal 16px/24px ${Fonts.inter}`,
              letterSpacing: '0em',
            }}>
            © {year} eduvacity. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
