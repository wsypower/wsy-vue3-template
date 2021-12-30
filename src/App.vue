<template>
  <el-config-provider :locale="locales[$store.state.settings.defaultLang]">
    <RouterView />
    <!-- <ReloadPrompt /> -->
  </el-config-provider>
</template>

<script setup>
  import { getElementLocales } from '@/locales'
  // import ReloadPrompt from '@/pwa/reloadPrompt.vue'

  const { proxy } = getCurrentInstance()
  const store = useStore()
  const route = useRoute()
  provide('generateI18nTitle', generateI18nTitle)

  const locales = computed(() => getElementLocales())

  watch(
    () => store.state.settings.mode,
    () => {
      if (store.state.settings.mode === 'pc') {
        store.commit('settings/updateThemeSetting', {
          sidebarCollapse: store.state.settings.sidebarCollapseLastStatus
        })
      } else if (store.state.settings.mode === 'mobile') {
        store.commit('settings/updateThemeSetting', {
          sidebarCollapse: true
        })
      }
      document.body.setAttribute('data-mode', store.state.settings.mode)
    },
    {
      immediate: true
    }
  )

  watch(
    () => store.state.settings.theme,
    () => {
      document.body.setAttribute('data-theme', store.state.settings.theme)
    },
    {
      immediate: true
    }
  )

  watch(
    [() => store.state.settings.menuMode, () => store.state.settings.sidebarCollapse],
    () => setMenuMode(),
    {
      immediate: true
    }
  )

  function setMenuMode() {
    document.body.removeAttribute('data-sidebar-no-collapse')
    document.body.removeAttribute('data-sidebar-collapse')
    if (['side', 'head', 'single'].includes(store.state.settings.menuMode)) {
      if (store.state.settings.sidebarCollapse) {
        document.body.setAttribute('data-sidebar-collapse', '')
      } else {
        document.body.setAttribute('data-sidebar-no-collapse', '')
      }
    }
    document.body.setAttribute('data-menu-mode', store.state.settings.menuMode)
  }

  watch(
    () => store.state.settings.appWidthMode,
    () => {
      document.body.setAttribute('data-app-width-mode', store.state.settings.appWidthMode)
    },
    {
      immediate: true
    }
  )

  watch(
    [() => store.state.settings.enableDynamicTitle, () => store.state.settings.title],
    () => setDocumentTitle(),
    {
      immediate: true
    }
  )

  function setDocumentTitle() {
    if (store.state.settings.enableDynamicTitle && store.state.settings.title) {
      let title = generateI18nTitle(route.meta.i18n, store.state.settings.title)
      document.title = `${title} - ${import.meta.env.VITE_APP_TITLE}`
    } else {
      document.title = import.meta.env.VITE_APP_TITLE
    }
  }

  onMounted(() => {
    window.onresize = () => {
      store.commit('settings/setMode', document.documentElement.clientWidth)
    }
    window.onresize()
  })

  function generateI18nTitle(key, defaultTitle) {
    return !!key && proxy.$te(key) ? proxy.$t(key) : defaultTitle
  }
</script>
