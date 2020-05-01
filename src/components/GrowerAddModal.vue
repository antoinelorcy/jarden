<template>
	<Modal
		title="Vous êtes producteurs ?"
		:visible="visible"
		@close="close"
	>
		<p>
			Ou vous souhaitez sur jarden.fr ?<br/>
			N'hésitez pas à remplir le formulaire ci-dessous, nous vous contacterons très prochainement pour en savoir plus !<br/>
			Vous pouvez également nous contacter directement à <a href="mailto:contact@jarden.fr">contact@jarden.fr</a>
		</p>
		<Form
			:is-submitted="form.submitted"
			@submit="submit"
			class="m--t-6"
		>
			<div class="grid">
				<FormItem label="Nom" class="col-lg-6 p--r-2">
					<Input
						v-model="form.name"
						slot-scope="{ props }"
						v-bind="props"
						placeholder="Votre nom"
					/>
				</FormItem>
				<FormItem
					label="Email"
					:validation="$v.form.email"
					:validation-messages="$v.form.$params.email.messages"
					class="col-lg-6 p--l-2"
				>
					<Input
						v-model="form.email"
						slot-scope="props"
						v-bind="props"
						placeholder="Votre email"
					/>
				</FormItem>
			</div>
			<FormItem label="Profession">
				<Input v-model="form.job" placeholder="Votre profession" />
			</FormItem>
			<FormItem label="Informations sur vous, vos produits, ...">
				<Textarea v-model="form.message" placeholder="Votre message" />
			</FormItem>
			<template slot="footer">
				<Button label="Annuler" fill="raw" color="grey" @click="close" />
				<Button label="Envoyer" type="submit" :is-loading="form.submitting" />
			</template>
		</Form>
	</Modal>
</template>

<script>
import Form from './Form';
import FormItem from './FormItem';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

const initialForm = () => {
	return {
		email: '',
		name: '',
		job: '',
		message: '',
		submitting: false,
		submitted: false
	}
};

export default {
	mixins: [validationMixin],

	props: {
		visible: Boolean
	},

	components: {
		Form,
		FormItem
	},

	data () {
		return {
			form: initialForm()
		}
	},

	validations: {
		form: {
			email: {
				required,
				email,
				$params: {
					messages: {
						required: 'Le champ email est requis',
						email: 'Email invalide'
					}
				}
			},
			name: {
				required
			},
			message: {
				required
			}
		}
	},

	methods: {
		close () {
			this.$emit('close');
			this.$v.$reset();
			this.form = initialForm();
		},

		submit () {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				console.log('submit', this.form);
				this.form.submitting = true;
				setTimeout (() => {
					this.form.submitting = false;
					this.form.submitted = true;
				}, 5000);
			}
		}
	}
};
</script>