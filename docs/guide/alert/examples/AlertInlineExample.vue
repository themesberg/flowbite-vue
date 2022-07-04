<template>
  <div class="flex flex-col">
    <Alert type="info" title="Info title" :inline="false" class="mb-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae eaque error est eveniet, facere illo labore libero minima molestiae neque nisi non officia quod sed temporibus unde vitae voluptates.
    </Alert>
    <Alert type="warning" title="Warning title" :inline="false" class="mb-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate dicta dolore dolores hic sequi tenetur, vero! Blanditiis consequatur culpa nisi ratione repellat! Delectus dolore magni nemo placeat qui sequi.
    </Alert>
    <Alert type="danger" title="Danger title" :inline="false" class="mb-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium atque cupiditate, dignissimos dolorum, error inventore iste libero minus nihil possimus quasi quia quibusdam quisquam recusandae repellat reprehenderit temporibus.
    </Alert>
    <Alert closable type="dark" title="Dark title" :inline="false" class="mb-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolore et, fuga impedit, iusto nam numquam officiis quas, repellat sapiente sit unde vel? Adipisci delectus dolore eius optio sunt.
    </Alert>
    <Alert type="success" title="Success title" :inline="false">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at culpa cupiditate deleniti eos ipsam ipsum, nostrum perspiciatis provident tempore? Aspernatur expedita praesentium voluptatibus. Accusamus explicabo iusto nobis reiciendis temporibus!
      <template #actions>
        <Button size="sm" color="green" class="mr-2">
          Buttons everywhere
        </Button>
        <Button size="sm" outline color="green">
          <template #prefix>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
          </template>
          And here
        </Button>
      </template>
    </Alert>
  </div>
</template>
<script setup>
import { Alert, Button } from '../../../../src/index'
</script>
