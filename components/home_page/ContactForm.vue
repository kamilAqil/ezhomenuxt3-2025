<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
  address: v.pipe(v.string(), v.nonEmpty('Address is required')),
  name: v.pipe(v.string(), v.nonEmpty('Name is required')),
  email: v.pipe(v.string(), v.email('Email is invalid')),
  propertyDescription: v.pipe(v.string(), v.nonEmpty('Property description is required')),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive<Schema>({
  address: '',
  name: '',
  email: '',
  propertyDescription: '',
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <section class="px-4 py-12 bg-gray-50">
    <div class="max-w-2xl mx-auto">
      <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormField name="address" label="Address">
            <UInput v-model="state.address" placeholder="Enter your address" />
          </UFormField>

          <UFormField name="name" label="Name">
            <UInput v-model="state.name" placeholder="Enter your name" />
          </UFormField>

          <UFormField name="email" label="Email">
            <UInput v-model="state.email" placeholder="Enter your email" />
          </UFormField>

          <UFormField name="propertyDescription" label="Property Description" class="md:col-span-2">
            <UInput v-model="state.propertyDescription" placeholder="Enter property description" />
          </UFormField>
        </div>

        <div class="pt-4">
          <UButton type="submit" block size="lg">Submit</UButton>
        </div>
      </UForm>
    </div>
  </section>
</template>

