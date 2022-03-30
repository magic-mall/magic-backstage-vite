import http from "../https/index";
import { useRequest } from 'vue-request';
import { LinkOptions } from './types/links';
class TestApi {
	public static getLink() {
		return useRequest<Array<LinkOptions>>((params = {}) =>
			http.get({
				url: '/shequ/links',
				params
			})
		)
	}
}

export { TestApi }