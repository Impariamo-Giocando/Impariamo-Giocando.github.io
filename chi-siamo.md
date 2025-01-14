---
layout: page
title: Il nostro tAIm
---

<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Forny-arch.png',
    name: 'Forny-arch',
    links: [
      { icon: 'github', link: 'https://github.com/Forny-arch' }
    ]
  },
  {
    avatar: 'https://github.com/lollogolle.png',
    name: 'lollogolle',
    links: [
      { icon: 'github', link: 'https://github.com/lollogolle' }
    ]
  },
  {
    avatar: 'https://github.com/giuliagiordana.png',
    name: 'giuliagiordana',
    links: [
      { icon: 'github', link: 'https://github.com/giuliagiordana' }
    ]
  },
  {
    avatar: 'https://github.com/ariannapocchiola.png',
    name: 'ariannapocchiola',
    links: [
      { icon: 'github', link: 'https://github.com/ariannapocchiola' }
    ]
  }
]

const ty = [
  {
    avatar: 'https://github.com/mbiagioli.png',
    name: 'Professor Biagioli',
    links: [
      { icon: 'github', link: 'https://github.com/mbiagioli' }
    ]
  },
  {
    avatar: 'https://github.com/openai.png',
    name: 'ChatGPT',
    links: [
      { icon: 'github', link: 'https://github.com/openai' }
    ]
  },
  {
    avatar: 'https://github.com/its-miroma.png',
    name: "qualcun'altro...",
    links: [
      { icon: 'github', link: 'https://github.com/its-miroma' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Il team
    </template>
    <template #lead>
      Impariamo, Giocando!
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Programmatori</template>
    <template #members>
  <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Ringraziamenti</template>
    <template #members>
  <VPTeamMembers size="small" :members="ty" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
