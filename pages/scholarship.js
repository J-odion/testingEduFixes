
import { useRouter } from 'next/router';
import HomePageLayout from '../src/views/home/layout';
import { Avatar,
    AvatarGroup,
    Box,
    CssBaseline,
    Divider,
    Grid,
    Typography, } from '@mui/material';
import { ArrowUp, PlayButton, WhatsApp } from '../src/components/svg';
import { Colors } from '../src/components/themes/colors';
import { Fonts } from '../src/components/themes/fonts';
import {
    EDUVACITY_VALUE,
    EMPOWERMENT_DESC,
    EMPOWERMENT_TITLE,
    HERO_TEXT,
    PROGRAM_DESC,
    PROGRAM_TITLE,
  } from '../src/utils/contants';

import Intercom from '@intercom/messenger-js-sdk';


export default function Scholarship(){
    const router = useRouter();
    Intercom({
      app_id: 'y4ubjwyw',
    });
  
    return(
        <div className='h-full  bg-white text-black'>
            <Box
        component="section"
        id="hero-section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
          backgroundImage: {
            xs: 'url(/images/hero-section-pattern-xs.svg)',
            sm: 'url(/images/hero.svg)',
          },
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          backgroundColor: Colors.secondary,
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: '1rem', sm: '1rem', lg: 12.5, xl: 16 },
            gap: { xs: 4, sm: 8 },
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '40px', sm: '80px' },
            }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
              <Typography
                variant="h1"
                sx={{
                  maxWidth: { xs: 340, sm: 1260 },
                  font: {
                    xs: `normal normal 600 normal 32px/48px ${Fonts.primary}`,
                    md: `normal normal 600 normal 64px/77px ${Fonts.primary}`,
                  },
                  color: Colors.light,
                  m: 0,
                  p: 0,
                  letterSpacing: '-2%',
                }}>
                Zenith Bank Educate Her {" "}
                <Typography variant="span" sx={{ color: Colors.primary }}>
                  Scholarship 
                </Typography>{' '}
                Program
              </Typography>
              <Box
                component="span"
                sx={{
                  maxWidth: 1050,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Typography
                  variant="span"
                  sx={{
                    font: {
                      xs: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                      sm: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                    },
                    color: Colors.offWhite,
                  }}>
                  Empower stay-at-home mothers and women in rural northern communities to <br /> reach the top 1% by providing programs that guarantee employability
                </Typography>
                <Box
                  component="div"
                  sx={{
                    maxWidth: 500,
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '24px',
                    mt: { xs: 4, md: 12 },
                  }}>
                  <Box
                    onClick={() => router.push(`${goToPortal}/signup`)}
                    sx={{
                      padding: '12px 20px 12px 20px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      font: `normal normal 500 normal 14px/[19.2px] ${Fonts.primary}`,
                      cursor: 'pointer',
                      color: 'rgba(230, 244, 237, 1)',
                      borderRadius: '46px',

                      background: Colors.primary,
                      '&:hover': {
                        background: Colors.primary,
                      },
                    }}>
                    Apply Now <ArrowUp />
                  </Box>
                  <Box
                    component="a"
                    target="_blank"
                    href="https://wa.link/3xhcsh"
                    // onClick={() => router.push(`https://wa.link/3xhcsh`)}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      font: `normal normal 500 normal 14px/16.8px ${Fonts.primary}`,
                      gap: '8px',
                      padding: '12px 20px 12px 20px',
                      color: Colors.primary,
                      border: `1px solid ${Colors.primary}`,
                      borderRadius: '46px',
                      cursor: 'pointer',
                      gap: '10px',
                      '&:hover': {
                        background: 'transparent',
                      },
                    }}>
                    <WhatsApp />
                    Learn more
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                boxSizing: 'border-box',
                width: '100%',
                height: {
                  xs: 280,
                  sm: 400,
                  md: 570,
                },
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                background: 'url(/images/hero-pix.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
            </Box>
          </Box>
        </Box>
      </Box>
        </div>
    )
}

Scholarship.getLayout = function getLayout(page) {
    return <HomePageLayout>{page}</HomePageLayout>;
  };
  