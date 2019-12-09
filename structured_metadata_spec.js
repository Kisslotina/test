const helper = require("./spechelper");
const uploadImage = helper.uploadImage;

const SUFFIX = helper.SUFFIX;
const EXTERNAL_ID_PREFIX = "metadata";
const EXTERNAL_ID = EXTERNAL_ID_PREFIX + SUFFIX;
const EXTERNAL_ID_11 = EXTERNAL_ID + "_11";

it("should update metadata", function () {
	const metadata = {
		external_id: EXTERNAL_ID_11,
		label: "input",
		type: "string",
	};
	return uploadImage().then(function (res) {
		api.create_metadata_field(metadata).then(({ external_id }) => {
			uploader.update_metadata({ [external_id]: "123456" }, [res.public_id]).then((result) => {
				expect(result).not.to.be.empty();
			});
		});
	});

});
