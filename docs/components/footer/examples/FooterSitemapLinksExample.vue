<template>
  <div class="vp-raw flex flex-col">
    <Footer>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          <div>
            <FooterTitle>COMPANY</FooterTitle>
            <FooterLinkGroup col>
              <FooterLink href="#">
                About
              </FooterLink>
              <FooterLink href="#">
                Careers
              </FooterLink>
              <FooterLink href="#">
                Brand Center
              </FooterLink>
              <FooterLink href="#">
                Blog
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle>HELP CENTER</FooterTitle>
            <FooterLinkGroup col>
              <FooterLink href="#">
                Discord Server
              </FooterLink>
              <FooterLink href="#">
                Twitter
              </FooterLink>
              <FooterLink href="#">
                Facebook
              </FooterLink>
              <FooterLink href="#">
                Contact Us
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle>LEGAL</FooterTitle>
            <FooterLinkGroup col>
              <FooterLink href="#">
                Privacy Policy
              </FooterLink>
              <FooterLink href="#">
                Licensing
              </FooterLink>
              <FooterLink href="#">
                Terms & Conditions
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle>DOWNLOAD</FooterTitle>
            <FooterLinkGroup col>
              <FooterLink href="#">
                iOS
              </FooterLink>
              <FooterLink href="#">
                Android
              </FooterLink>
              <FooterLink href="#">
                Windows
              </FooterLink>
              <FooterLink href="#">
                MacOS
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  </div>
</template>


<script setup>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterTitle } from '../../../../src/index'
</script>
