<template>
  <div class="vp-raw flex flex-col">
    <Footer>
      <div className="w-full">
        <div className="grid gap-8 w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle>RESOURCE</FooterTitle>
              <FooterLinkGroup col>
                <FooterLink href="#">
                  Flowbite
                </FooterLink>
                <FooterLink href="#">
                  Tailwind CSS
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle>FOLLOW US</FooterTitle>
              <FooterLinkGroup col>
                <FooterLink href="#">
                  Github
                </FooterLink>
                <FooterLink href="#">
                  Discord
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
                  Terms & Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
          year="2023"
          by="Flowbite™"
          href="https://flowbite.com/"
          suffix=". All Rights Reserved."
          >
          </FooterCopyright>
        </div>
      </div>
    </Footer>
  </div>
</template>

<script setup>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterTitle } from '../../../../src/index'
</script>
