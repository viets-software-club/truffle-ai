from flask import Flask, request, abort, jsonify
import xai_sdk
import asyncio

app = Flask(__name__)

# grok ai
client = xai_sdk.Client()
chat = client.chat


async def getTwitterSentiment(owner, repository):
    client = xai_sdk.Client()
    conversation = client.chat.create_conversation()
    return await conversation.add_response('Explain to me in simple words of 140 characters what the sentiment of the tweets are for the repository {}/{}.'.format(owner, repository))

@app.route('/')
def twitter():
    owner = request.args.get('owner')
    repository = request.args.get('repository')

    if owner and repository:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        result = loop.run_until_complete(getTwitterSentiment(owner, repository))
        loop.close()
        return jsonify(result)

    abort(404)

if __name__ == '__main__':
    app.run(debug=False, port=3003, host='0.0.0.0')